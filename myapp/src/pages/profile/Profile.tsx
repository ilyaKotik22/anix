import style from './styles/Profile.module.css'
import img from '../../././../public/images.png'
import { useGetProfileInfo } from '@/hooks/useGetProfileInfo';
import AnimeCard from '@/components/shared/animeCard/AnimeCard';
import MyButton from '@/components/ui/myButton/MyButton';

const Profile = () => {
    const { data } = useGetProfileInfo()
    console.log(data)
    return (
        <main className={style.Profile}>
            <section className={`${style.sec}  ${style.imgSec}`}>
                <img src={img} alt="" />
                <section className={style.buttonSec}>
                    <MyButton content='Добавить аватар'/>
                    <MyButton content='Выйти'/>
                </section>
                
            </section>
            <section className={style.sec}>
                <section className={style.info}><div className="">Имя</div> {data?.name}</section>
                <section className={style.info}><div className="">email</div>  {data?.email}</section>
                <section className={style.info}>избранные </section>
                <ul>
                    {data?.favorites && data.favorites.map(el =>  <AnimeCard key={el.id}
                        id={el.id}
                        title={el.title}
                        image={el.poster}
                    />)}
                </ul>

                <section className={style.info}></section>

            </section>
        </main>);
}

export default Profile;