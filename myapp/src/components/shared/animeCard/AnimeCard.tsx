import style from './AnimeCard.module.css'
import imgq from '../../../../public/images.png'
type AnimeCardType = {
    name: string,
    description: string
    img?: string
}

const AnimeCard = ({name,description,img}:AnimeCardType) => {
    return ( 
    <li className={style.AnimeCard}>
        <section className={style.imgSection}>
            <img src={imgq} alt="" />
        </section>
        <section className={style.infoSection}>
            <h2>{name}</h2>
            <div className="">sasd</div>
            
        </section>
    </li> );
}
 
export default AnimeCard;