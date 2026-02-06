import MyButton from "@/components/ui/myButton/MyButton";
import img1 from "../../../../public/images.png";
import style from "../styles/AnimePageBody.module.css";
import type { AnimeInfo } from "@/types/anime";
import type { ReactElement } from "react";
import MySkeleton from "@/components/ui/mySkeleton/Skeleton";

const AnimePageBody = ({
  id,
  title,
  url,
  image,
  description,
  genres,
  subOrDub,
  type,
  status,
  otherName,
  totalEpisodes,
  episodes,
}: AnimeInfo) => {
  const specification = [
    { lable: "Всего эпизодов", data: totalEpisodes  },
    { lable: "Режиссёр", data: subOrDub },
    { lable: "Другое название", data: otherName || 'sad'},
    // { lable: "Жанр", data: genres?.map(el=> <div>{el}</div>) },
    { lable: "Статус", data: status },
    { lable: "тип", data: type  },
  ];

  return (
    <section className={style.animeBody}>
      <section className={style.halfs}>
        <img src={image} alt="" />
      </section>
      <section className={`${style.halfs} ${style.rightHalf}`}>
        <div className={style.title}>{title || <MySkeleton/>}</div>
        <ul className={style.info}>
          {genres?.map((el) => (
            <ul key={el}>
              {el.split("   ").map((ell) => (
                <li key={ell}>{ell}</li>
              ))}
            </ul>
          ))}
          {specification.map(
            (el: {
              lable: string;
              data: string | undefined | ReactElement[] | number;
            }) => (
              <li key={el.lable}>
                {el.lable}: {el.data || <MySkeleton/>}
              </li>
            ),
          )}
        </ul>
        <div className={style.buttonSection}>
          <MyButton
            content="⏵ Смотреть онлайн"
            as="button"
            onClick={() => console.log("asdsa")}
            className={style.APBbutton}
          />
          <MyButton
            content="♥ Добавить в избранное"
            className={style.APBbuttonsec}
          />
        </div>

        <div className={style.title}>Описание</div>
        <div className={style.desc }>{description || <MySkeleton/>}</div>
      </section>
      <section>
        <ul>
          
        </ul>
        
      </section>
    </section>
  );
};

export default AnimePageBody;
