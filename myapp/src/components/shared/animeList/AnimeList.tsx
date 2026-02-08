import type { AnimeCardType } from "@/types/anime";
import AnimeCard from "../animeCard/AnimeCard";
import style from "./AnimeList.module.css";

import MySkeleton from "@/components/ui/mySkeleton/Skeleton";
type AnimeList = {
  data: AnimeCardType[] | [];
};
const skeletonList = [
  <div key={'sda'} style={{ width: "150px", height: "200px" }}>
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
  return (
    <>
      {data.length != 0 ? (
        <ul className={style.AnimeList}>
          {data.map((el: AnimeCardType) => (
            <AnimeCard
              key={el.id}
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
        <ul
          style={{
            padding: "150px 6vw",
            display: "flex",
            height: "100vh",
            flexWrap: "wrap",
            gap: "5px",
          }}
        >
          {skeletonList.map((el, index) =><li key={index}>{el}</li> )}
        </ul>
      )}

     
    </>
  );
};

export default AnimeList;
