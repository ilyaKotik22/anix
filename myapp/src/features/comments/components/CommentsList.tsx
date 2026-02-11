import style from "../styles/CommentsList.module.css";
import img from "../../../../public/images.png";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";
import type { User } from "@/types/auth";

type CommentItem = {
  animeId: string
  content: string
  createdAt: string
  id: string
  updatedAt: string
  user: User

}
type CommentList = {
  comments: CommentItem[]
}
const CommentsList = ({ comments }: CommentList) => {

  return (
    <section className={style.CommentsList}>
      <CommentForm />
      <div className={style.ListTitle}>Комментарии</div>
      <ul>
        {comments && comments.map((comment:CommentItem) => <CommentItem
          name={comment.user.name}
          data={comment.createdAt}
          likes={2}
          content={comment.content}
          avatar={comment.user.image}
        />)}
       
      </ul>
    </section>
  );
};

export default CommentsList;
