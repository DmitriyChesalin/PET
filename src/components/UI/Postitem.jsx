import React from "react"
import MyButton from "./Button/MyButton";
import { useNavigate } from "react-router-dom";




const Postitem = React.forwardRef((props, ref) => {
    const router = useNavigate()
    console.log(router)
    return (
        <div ref={ref} className="post">
            <div className="post__content">
                <strong>{props.number}. {props.post.title}</strong>
                <div>{props.post.body}</div>
            </div>
                <div className="post__btns">
                <MyButton onClick={() => router(`/posts/${props.post.id}`)} >открыть</MyButton>
                <MyButton onClick={() => props.remove(props.post)} >удалить</MyButton>
            </div>
        </div>
    );
});










export default Postitem;