import MyButton from '@/components/ui/myButton/MyButton';
import img1 from '../../../../public/images.png'
import style from '../styles/AnimePageBody.module.css'
const AnimePageBody = () => {
    const specification = [
        {lable: 'Год выхода', data: ''},
        {lable: 'Время', data: ''},
        {lable: 'Режиссёр', data: ''},
        {lable: 'Рейтинг аниме', data: ''},
        {lable: 'Жанр', data: ''},
        {lable: 'Просмотров', data: ''},
        {lable: 'Статус', data: ''},
        {lable: 'Первоисточник', data: ''},
        {lable: 'Студия', data: ''},
        {lable: 'Тип перевода', data: ''},
        {lable: 'Озвучка от', data: ''},
    ]
    return ( 
        <section className={style.animeBody}>
            <section className={style.halfs}>
                <img src={img1} alt="" />
            </section>
            <section className={style.halfs}>
                <div className={style.title}>Название</div>
                <ul className={style.info}>
                    {specification.map((el:{lable: string,data: string}) => 
                    <li key={el.lable}>
                        {el.lable}: {el.data}
                    </li>)}
                </ul>
                <div className="">
                    <MyButton content='⏵ Смотреть онлайн' as='button' onClick={()=>console.log('asdsa')} className={style.APBbutton} />
                    <MyButton content='♥ Добавить в избранное' className={style.APBbuttonsec} />
                </div>
                
                <div  className={style.title}>Описание</div>
                <div className={style.desc}>Если люди встречаются друг с другом, то это явно было предначертано судьбой. Впрочем, для чего это было задумано? Зритель снова насладится обществом хорошо знакомых ему Лоуренса, который является чем-то вроде передвижной торговой лавки, и его давней подруги Хорошо – волчицы небесного происхождения. Прошёл год с момента ухода двух главных персонажей из деревни, однако до окончательного места дислокации ещё идти и идти. Впрочем, такое ощущение, что и Лоуренсу, и Хорошо это даже выгодно, т.к. они с каждым разом улучшают своё взаимодействие и, конечно же, на этом пути они точно не заскучают. </div>
            </section>
        </section> );
}
 
export default AnimePageBody;