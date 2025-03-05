import React, { useState }  from "react"
import MyInput from "./Input/MyInput";
import MyButton from "./Button/MyButton";



const PostForm =  ({create}) => {

    const [post , setPost] = useState({title: "", body: ""})

  const addNewPost = (e) => {
    e.preventDefault()
      const newPost = {
    ...post, id: Date.now()
  }
    create(newPost)
    setPost({title: "", body: ""})
    
    }
    

    return (
        <div>
            <form>
                <MyInput
                    onChange={e => setPost({ ...post, title: e.target.value })}
                    value={post.title}
                    type="text"
                    placeholder="название поста"></MyInput>


                <MyInput
                    onChange={e => setPost({ ...post, body: e.target.value })}
                    value={post.body}
                    type="text"
                    placeholder="описание поста"></MyInput>




                <MyButton onClick={addNewPost}>создать пост</MyButton>
            </form>
        </div>

    );

};

export default PostForm;