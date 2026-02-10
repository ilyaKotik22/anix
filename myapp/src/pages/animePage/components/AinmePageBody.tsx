import MyButton from "@/components/ui/myButton/MyButton";
import style from "../styles/AnimePageBody.module.css";
import type { AnimeCardType, AnimeInfo } from "@/types/anime";
import MySkeleton from "@/components/ui/mySkeleton/Skeleton";
import { useGetProfileInfo } from "@/hooks/useGetProfileInfo";
import { useAddInFavorite } from "@/hooks/useAddInFavorites";
import { useNavigate } from "react-router-dom";
import type { ReactElement } from "react";
const AnimePageBody = ({
  id,
  title,
  image,
  description,
  genres,
  subOrDub,
  type,
  status,
  otherName,
  totalEpisodes,

}: AnimeInfo) => {
  const navigate = useNavigate()
  const { data } = useGetProfileInfo()
  const { addHandle } = useAddInFavorite()
  const user = localStorage.getItem('user') || ''
  const specification = [
    { lable: "Всего эпизодов", data: totalEpisodes },
    { lable: "Режиссёр", data: subOrDub },
    { lable: "Другое название", data: otherName || 'sad' },
    { lable: "Статус", data: status },
    { lable: "тип", data: type },
  ];

  return (
    <section className={style.animeBody}>
      <section className={style.halfs}>
        <img src={image} alt="" />
      </section>
      <section className={`${style.halfs} ${style.rightHalf}`}>
        <div className={style.title}>{title || <MySkeleton />}</div>
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
                {el.lable}: {el.data || <MySkeleton />}
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
            onClick={() => user !== '' ? (id && title && description) && addHandle({ id, title, poster: image, description }) : navigate('/auth')}
            content={data?.favorites.some((anime: AnimeCardType) => anime.id === id) ? "♥ Убрать из избранных" : "♥ Добавить в избранное"}
            className={style.APBbuttonsec}
          />
        </div>

        <div className={style.title}>Описание</div>
        <div className={style.desc}>{description || <MySkeleton />}</div>
      </section>
      <section>
        <ul>

        </ul>

      </section>
    </section>
  );
};

export default AnimePageBody;
