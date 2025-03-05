import React, { useEffect, useState } from "react";
import PostLists from "../components/UI/PostLists";
import MyButton from "../components/UI/Button/MyButton";
import PostForm from "../components/UI/PostForm";
import PostFilter from "../components/UI/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from '../components/UI/Loader/Loader'






function Posts() {

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({ sort: "", query: "" })
    const [modal, setModal] = useState(false)
    const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);

    const [isPostsLoading, setIsPostLoading] = useState(false)




    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    useEffect(() => {
        fetchPosts()
    }, [])


    async function fetchPosts() {
        setIsPostLoading(true)
        setTimeout(async () => {
            const posts = await PostService.getAll()
            setPosts(posts)
            setIsPostLoading(false)

        }, 1000)

    }





    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }




    return (
        <div className="App">
            <button onClick={fetchPosts}>GET POSTS</button>

            <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
                Создать пользователя
            </MyButton>

            <MyModal visible={modal} setVisible={setModal}>  <PostForm create={createPost} /></MyModal>
            <hr style={{ margin: "15px 0" }} />

            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />

 <PostLists posts={sortedAndSearchPosts} remove={removePost} title="список постов" />
            {isPostsLoading &&
                 <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}><Loader /></div>}
                
            



        </div>
    )
}








export default Posts;
