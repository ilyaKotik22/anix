import { Link, useLocation } from "react-router-dom";
import style from "./header.module.css";
import SearchInput from "@/features/searchInput/components/SearcInput";
import MyButton from "@/components/ui/myButton/MyButton";
import { useEffect, useState } from "react";
import DropdownMenu from "./dropdowmMenu/DropdownMenu";
import { useGetGenreList } from "@/hooks/useGetGenreList";
import { Settings } from "lucide-react";
import { PATHNAMES } from "@/app/routes";

const Header = () => {
  const location = useLocation();
  const {data} = useGetGenreList()
  const [vis,setVis] = useState<boolean>(false)

  const user = localStorage.getItem('user') || ''
  

  useEffect(() => {}, [location]);
  const navigation = [
    { label: "Моя вкладка", path: "/mytabs" },
    { label: "Недавнее", path: "/" }, //recent-added
    { label: "Новые", path: "/new-releases" },
    { label: "Завершённые", path: "/latest-completed" },
    { label: "ОВА", path: "/ova" },
    { label: "ОНА", path: "/ona" },
    { label: "Фильмы", path: "/movies" },
  ];
  return (
    <>
      <header>
        <section className={style.sec}>
          <SearchInput />

          <section className={style.rightBar}>
            <div className=""><Settings style={{minWidth:'45px'}} width={45} /></div>
            <Link to={PATHNAMES.profile(JSON.parse(user).name)}>{user !== '' ? JSON.parse(user).name : <MyButton  content="Войти" />}</Link>
            
            
          </section>
        </section>
        <section className={style.sec}>
          <ul>
            <li className={`${vis ? style.linkPick : style.link}`} onClick={()=>setVis((el)=> !el)}>Каталог</li>
            {navigation.map((el) => (
              <li key={el.label}>
                <Link
                  className={
                    location.pathname === el.path ? style.linkPick : style.link
                  }
                  to={el.path}
                >
                  {el.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className={style.logo}>logo</div>
        </section>
      </header>
      <DropdownMenu action={()=>setVis(e=>!e)} visibule={vis} data={data as string[] || []}/>
    </>
  );
};

export default Header;
