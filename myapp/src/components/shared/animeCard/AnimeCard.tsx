import { Link } from "react-router-dom";
import style from "./AnimeCard.module.css";

import type { AnimeCardType } from "@/types/anime";
import { PATHNAMES } from "@/app/routes";

const AnimeCard = ({
  id,
  title,
  url,
  image,
  releaseDate,
  subOrDub,
}: AnimeCardType) => {
  return (
    <Link to={`/${PATHNAMES.animePage(id)}`}>
        <li className={style.AnimeCard}>
        <section className={style.imgSection}>
          <img src={image} alt="" />
        </section>
        <section className={style.infoSection}>
          <h2>{title}</h2>
          
        </section>
      </li>
    </Link>
    
  );
};

export default AnimeCard;
