import CommentsList from "@/features/comments/components/CommentsList";
import PlayerBlock, { type Episodes } from "@/features/playerBlock/PlayerBlock";
import { useGetAnimeInfo } from "@/hooks/useGetAnimeInfo";
import AnimePageBody from "@/pages/animePage/components/AinmePageBody";

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
      <PlayerBlock data={data?.episodes || []}/>
      <CommentsList />
    </main>
  );
};

export default Anime;
