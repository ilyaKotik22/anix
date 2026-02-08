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
   
    <li  key={id}>
      <Link key={id} to={`/${PATHNAMES.animePage(id)}`}>
        <div key={id} className={style.AnimeCard}>
          <section className={style.imgSection}>
            <img src={image} alt="" />
          </section>
          <section className={style.infoSection}>
            <h2>{title}</h2>

          </section>
        </div>
      </Link>
    </li>
      
  


  );
};

export default AnimeCard;
