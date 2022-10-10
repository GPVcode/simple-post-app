import React from "react";
import Delete from "./Delete"

// create the post that will be mapped into list in postList
function PostContent({post, posts, setPosts}){
    return(
        <fieldset className="post">
            <div>
                {post.type === "Text" ? 
                <p>{post.content}</p>
                :
                <img src={post.content} alt=""/>}
            </div>
            <div>
                <Delete post={post} posts={posts} setPosts={setPosts}/>
            </div>
        </fieldset>
    )
}

export default PostContent