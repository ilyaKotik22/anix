import MyButton from "@/components/ui/myButton/MyButton";
import style from "../styles/CommentForm.module.css";
import { useState } from "react";
import { useSendComments } from "@/hooks/auth/useSendComment";
import { useAuth } from "@/app/context";
import { useNavigate } from "react-router-dom";
const CommentForm = () => {
  const { token } = useAuth()
  const navigation = useNavigate()
  const [text, setText] = useState<string>('')
  const { handleSendText } = useSendComments()
  return (
    <>
      {token
        ? <><form className={style.CommentForm}>
          <div className={style.title}>Добавить комментарий:</div>
          <textarea onChange={(e) => setText(e.target.value)} />
        </form>
          <MyButton type="button" onClick={() => handleSendText(text)} content="Добавить комментарий" /></>
        : <>Зарегистрируйтесь чтобы оставлять коментарии под тайтлами  <MyButton onClick={() => navigation('/auth')} content="Зарегистрироватся" /></>}


    </>

  );
};

export default CommentForm;
