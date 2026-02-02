import { Link, useLocation } from "react-router-dom";
import style from "./header.module.css";
import SearchInput from "@/features/searchInput/SearcInput";
import MyButton from "@/components/ui/myButton/MyButton";

const Header = () => {
  const location = useLocation();
  console.log(location);

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
    <header>
      <section className={style.sec}>
        <SearchInput />

        <section className={style.rightBar}>
          <div className="">нст</div>
          <MyButton content="Войти" />
        </section>
      </section>
      <section className={style.sec}>
        <ul>
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
  );
};

export default Header;
