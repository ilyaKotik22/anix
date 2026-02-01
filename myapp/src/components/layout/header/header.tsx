import { Link, useLocation } from 'react-router-dom';
import style from './header.module.css'
import { MyInput } from '@/components/ui/myInput/MyInput';
import SearchInput from '@/features/searchInput/SearcInput';
const Header = () => {
    const location = useLocation()
    console.log(location)
    const navigation = [
        { label: 'Моя вкладка',  path: '/mytabs'    },
        { label: 'Последнее',    path: '/'    },
        { label: 'Онгоинги',     path: '/ongoing'   },
        { label: 'Анонсы',       path: '/announced' },
        { label: 'Завершённые',  path: '/completed' },
        { label: 'Фильмы',       path: '/movies'    },
        ];
    return ( 
        <header>
            <section className={style.sec}>
             
                    <SearchInput/>
                
                <section className={style.rightBar}>
                    <div className="">нст</div>
                    <div className="">профиль</div>
                </section>
                
            </section>
            <section className={style.sec}>
                <ul>
                    {navigation.map((el) => 
                        <li key={el.label}>
                            <Link className={location.pathname === el.path ? style.linkPick : style.link } to={el.path}>{el.label}</Link>
                        </li>)}
                </ul>
            </section>
        </header> );
}
 
export default Header;