
import { useNavigate } from 'react-router-dom'
import style from './DropdownMenu.module.css'
import { PATHNAMES } from '@/app/routes'
type DropdownMenuType ={
    visibule: boolean
    data: string[]
    action: () => void
}
const DropdownMenu = ({visibule,data,action}:DropdownMenuType) => {
    const navigate = useNavigate()
    return ( 
    <ul className={`${style.vis} ${!visibule && style.unVis} ` }>
        {data.length != 0 &&  data.map(el=> <li onClick={()=> {
            navigate(PATHNAMES.genrePage(el))
            action()
        }} key={el}>{el}</li>)}
    </ul> );
}
 
export default DropdownMenu;