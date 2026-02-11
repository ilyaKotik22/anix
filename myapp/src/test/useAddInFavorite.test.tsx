import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAddInFavorite } from "@/hooks/anime/useAddInFavorites";
import type { AnimeFav } from "@/types/anime";

// мок функции API
vi.mock("@/api/anime/postAddFavorite", () => ({
  postAddFavorite: vi.fn(),
}));

import { postAddFavorite } from "@/api/anime/postAddFavorite";

// обёртка для react-query
const createWrapper = () => {
  const queryClient = new QueryClient();
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

describe("useAddInFavorite", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.setItem("authToken", "test-token");
  });

  it("calls postAddFavorite with correct data", async () => {
    (postAddFavorite as any).mockResolvedValueOnce({ success: true });

    const wrapper = createWrapper();

    const { result } = renderHook(() => useAddInFavorite(), { wrapper });

    const anime: AnimeFav = {
      id: "naruto",
      title: "Naruto",
      poster: "img.jpg",
      description: "desc",
    };

    await act(async () => {
      result.current.addHandle(anime);
    });

    expect(postAddFavorite).toHaveBeenCalledWith(anime, "test-token");
  });
});
