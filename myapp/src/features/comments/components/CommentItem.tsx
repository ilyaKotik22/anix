import { ThumbsDown, ThumbsUp } from "lucide-react";
import style from '../styles/CommentItem.module.css'
type CommentItemType = {
    name:string,
    data:string,
    likes:number,
    avatar?: string
    content:string
}
const CommentItem = ({name,data,likes,avatar,content}:CommentItemType) => {
    return ( 
        <section className={style.CommentsItem}>
        <section className={style.CommentsItemHeader}>
            <section className={style.profile}>
                <img src={avatar} alt="" />
                <section>
                    <div>{name}</div>
                    <div className={style.data}>{data}</div>
                </section>
            </section>
            <section className={style.likes}>
                <div className=""><ThumbsUp/></div>
                <div className="">{likes}</div>
                <div className=""><ThumbsDown/></div>
            </section>
        </section>
        <section className={style.CommContent}>
            {content}
        </section>
        </section>
     );
}
 
export default CommentItem;