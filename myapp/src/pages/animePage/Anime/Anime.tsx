import CommentsList from "@/features/comments/components/CommentsList";
import PlayerBlock from "@/features/playerBlock/PlayerBlock";
import { useGetAnimeInfo } from "@/hooks/anime/useGetAnimeInfo";
import AnimePageBody from "@/pages/animePage/AinmePageBody/AinmePageBody";

const Anime = () => {
  const { data } = useGetAnimeInfo();

  return (
    <main style={{ paddingTop: "130px" }}>
      <AnimePageBody
        id={data?.id}
        title={data?.title}
        url={data?.url}
        image={data?.image}
        description={data?.description}
        genres={data?.genres}
        subOrDub={data?.subOrDub}
        type={data?.type}
        status={data?.status}
        otherName={data?.otherName}
        totalEpisodes={data?.totalEpisodes}
        episodes={data?.episodes}
      />
      {data?.episodes && <PlayerBlock dataa={data?.episodes} />}

      <CommentsList />
    </main>
  );
};

export default Anime;
