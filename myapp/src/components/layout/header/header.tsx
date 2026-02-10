import { Link, useLocation, useNavigate } from "react-router-dom";
import style from "./header.module.css";
import SearchInput from "@/features/searchInput/SearcInput";
import MyButton from "@/components/ui/myButton/MyButton";
import { useEffect, useState } from "react";
import DropdownMenu from "./dropdownMenu/DropdownMenu";
import { useGetGenreList } from "@/hooks/anime/useGetGenreList";
import { Settings } from "lucide-react";
import { PATHNAMES } from "@/app/routes";

const Header = () => {
  const user = localStorage.getItem('user') || ''
  
   const navigation = [
    { label: "Моя вкладка", path: user !== '' ? "/mytabs" : '/auth' },
    { label: "Недавнее", path: "/" }, //recent-added
    { label: "Новые", path: "/new-releases" },
    { label: "Завершённые", path: "/latest-completed" },
    { label: "ОВА", path: "/ova" },
    { label: "ОНА", path: "/ona" },
    { label: "Фильмы", path: "/movies" },
  ];
  const navigate = useNavigate()
  const location = useLocation();
  const { data } = useGetGenreList()
  const [vis, setVis] = useState<boolean>(false)

  useEffect(() => { }, [location]);
 
  return (
    <>
      <header>
        <section className={style.sec}>
          <SearchInput />

          <section className={style.rightBar}>
            <div className=""><Settings style={{ minWidth: '45px' }} width={45} /></div>
            {user !== '' ? <Link to={PATHNAMES.profile(JSON.parse(user).name) || ''}>{JSON.parse(user).name}</Link> : <MyButton onClick={() => navigate('/auth')} content="Войти" />}
          </section>
        </section>
        <section className={style.sec}>
          <ul>
            <li className={`${vis ? style.linkPick : style.link}`} onClick={() => setVis((el) => !el)}>Каталог</li>
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
      <DropdownMenu action={() => setVis(e => !e)} visibule={vis} data={data as string[] || []} />
    </>
  );
};

export default Header;
