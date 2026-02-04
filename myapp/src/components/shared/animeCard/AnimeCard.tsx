import style from "./AnimeCard.module.css";

import type { AnimeCardType } from "@/types/anime";

const AnimeCard = ({
  id,
  title,
  url,
  image,
  releaseDate,
  subOrDub,
}: AnimeCardType) => {
  return (
    <li className={style.AnimeCard}>
      <section className={style.imgSection}>
        <img src={image} alt="" />
      </section>
      <section className={style.infoSection}>
        <h2>{title}</h2>
        
      </section>
    </li>
  );
};

export default AnimeCard;
