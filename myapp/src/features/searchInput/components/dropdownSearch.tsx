import type { AnimeCardType } from '@/types/anime';
import style from '../styles/dropdownSearch.module.css'

type DropdownSearch ={
    data: AnimeCardType[]
}
const DropdownSearch = ({data}:DropdownSearch) => {
    
    return ( 
    <ul className={style.list}>
        {data.map((el:AnimeCardType) => <li>{el.title}</li>)}
    </ul> );
}
 
export default DropdownSearch;