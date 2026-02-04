
import { Link } from 'react-router-dom'
import style from './DropdownMenu.module.css'
import { PATHNAMES } from '@/app/routes'
type DropdownMenuType ={
    visibule: boolean
    data: string[]
}
const DropdownMenu = ({visibule,data}:DropdownMenuType) => {
    
    return ( 
    <ul className={`${style.vis} ${!visibule && style.unVis} ` }>
        {data.length != 0 &&  data.map(el=> <li key={el}><Link className='link' to={PATHNAMES.genrePage(el)}>{el}</Link></li>)}
    </ul> );
}
 
export default DropdownMenu;