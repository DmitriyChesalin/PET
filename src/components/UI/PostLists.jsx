import React, { createRef } from "react";
import Postitem from "./Postitem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const PostList = ({ posts, title, remove }) => {

    if (!posts.length) {
        return (
            <h1 style={{ textAlign: "center" }}>
                There are no posts here!
            </h1>
        )
    }

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>{title}</h1>
            <TransitionGroup>
                {posts.map((post, index) => {
                    const nodeRef = createRef(null);
                    return (
                        <CSSTransition
                            key={post.id}
                            nodeRef={nodeRef}
                            timeout={500}
                            classNames="post"
                        >
                            <Postitem ref={nodeRef} remove={remove} number={index + 1} post={post} />
                        </CSSTransition>
                    );
                }
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;