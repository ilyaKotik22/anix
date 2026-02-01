import MyButton from '@/components/ui/myButton/MyButton';
import style from '../styles/CommentForm.module.css'
const CommentForm = () => {
    return ( 
        <form className={style.CommentForm}>
            <div className={style.title}>Добавить комментарий:</div>
            <textarea/>
            <MyButton content='Добавить комментарий'/>
        </form> );
}
 
export default CommentForm;