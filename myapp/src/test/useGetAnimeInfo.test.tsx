import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook } from "@testing-library/react";
import { waitFor } from "@testing-library/react"; // <-- импортируем waitFor
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useGetAnimeInfo } from "@/hooks/anime/useGetAnimeInfo";
import { useLocation } from "react-router-dom";
import { getAnimeInfo } from "@/api/anime/getAnimeInfo";

// Мокаем API и useLocation
vi.mock("@/api/anime/getAnimeInfo", () => ({
  getAnimeInfo: vi.fn(),
}));

vi.mock("react-router-dom", () => ({
  useLocation: vi.fn(),
}));

const createWrapper = () => {
  const queryClient = new QueryClient();
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe("useGetAnimeInfo", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    (useLocation as any).mockReturnValue({ pathname: "/anime/naruto" });
  });

  it("fetches anime info correctly", async () => {
    const mockData = { data: { id: "naruto", title: "Naruto" } };
    (getAnimeInfo as any).mockResolvedValueOnce(mockData);

    const wrapper = createWrapper();
    const { result } = renderHook(() => useGetAnimeInfo(), { wrapper });

    // Ждем пока данные загрузятся
    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    expect(getAnimeInfo).toHaveBeenCalledWith("naruto");
    expect(result.current.data).toEqual(mockData.data);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(false);
  });

  it("handles error correctly", async () => {
    (getAnimeInfo as any).mockRejectedValueOnce(new Error("Failed"));

    const wrapper = createWrapper();
    const { result } = renderHook(() => useGetAnimeInfo(), { wrapper });

    await waitFor(() => {
      expect(result.current.isError).toBe(false);
    });

    expect(result.current.data).toBeUndefined();
  });
});
