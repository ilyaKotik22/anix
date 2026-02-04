import type { AnimeCardType } from "@/types/anime";
import style from "../styles/dropdownSearch.module.css";
import { PATHNAMES } from "@/app/routes";
import { useNavigate } from "react-router-dom";


type DropdownSearch = {
  data: AnimeCardType[];
  action: () =>void
};
const DropdownSearch = ({ data,action }: DropdownSearch) => {
  const navigate = useNavigate()
  return (
    <ul className={style.list}>
      {data.map((el: AnimeCardType) => (
        <li
          onClick={() => {
            action()
            navigate(PATHNAMES.animePage(el.id));
            
          }}
        >
          <img src={el.image} alt="" />
          {el.title}
        </li>
      ))}
    </ul>
  );
};

export default DropdownSearch;
