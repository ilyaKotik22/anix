import type { AnimeCardType } from "@/types/anime";
import AnimeCard from "../animeCard/AnimeCard";
import style from "./AnimeList.module.css";

import MySkeleton from "@/components/ui/mySkeleton/Skeleton";
type AnimeList = {
  data: AnimeCardType[] | [];
};
const skeletonList = [
  <div style={{ width: "150px", height: "200px" }}>
    <MySkeleton />
  </div>,
  <div style={{ width: "150px", height: "200px" }}>
    <MySkeleton />
  </div>,
  <div style={{ width: "150px", height: "200px" }}>
    <MySkeleton />
  </div>,
  <div style={{ width: "150px", height: "200px" }}>
    <MySkeleton />
  </div>,
  <div style={{ width: "150px", height: "200px" }}>
    <MySkeleton />
  </div>,
  <div style={{ width: "150px", height: "200px" }}>
    <MySkeleton />
  </div>,
  <div style={{ width: "150px", height: "200px" }}>
    <MySkeleton />
  </div>,
  <div style={{ width: "150px", height: "200px" }}>
    <MySkeleton />
  </div>,
  <div style={{ width: "150px", height: "200px" }}>
    <MySkeleton />
  </div>,
  <div style={{ width: "150px", height: "200px" }}>
    <MySkeleton />
  </div>,
  <div style={{ width: "150px", height: "200px" }}>
    <MySkeleton />
  </div>,
  <div style={{ width: "150px", height: "200px" }}>
    <MySkeleton />
  </div>,
  <div style={{ width: "150px", height: "200px" }}>
    <MySkeleton />
  </div>,
  <div style={{ width: "150px", height: "200px" }}>
    <MySkeleton />
  </div>,
  <div style={{ width: "150px", height: "200px" }}>
    <MySkeleton />
  </div>,
  <div style={{ width: "150px", height: "200px" }}>
    <MySkeleton />
  </div>,
];
const AnimeList = ({ data }: AnimeList) => {
  console.log(data.length == 0 ? "пусто" : "массив");
  return (
    <>
      {data.length != 0 ? (
        <ul className={style.AnimeList}>
          {data.map((el: AnimeCardType) => (
            <AnimeCard
              id={el.id}
              title={el.title}
              url={el.url}
              image={el.image}
              releaseDate={el.releaseDate}
              subOrDub={el.subOrDub}
            />
          ))}
        </ul>
      ) : (
        <div
          style={{
            padding: "150px 6vw",
            display: "flex",
            height: "100vh",
            flexWrap: "wrap",
            gap: "5px",
          }}
        >
          {skeletonList.map((el) => el)}
        </div>
      )}

      <div className="">skel</div>
    </>
  );
};

export default AnimeList;
