import React from "react";

//create delete component
function Delete({post, posts, setPosts}){

    const handleDelete = (indexToDelete) =>{
        setPosts(posts.filter((post) => post.id !== indexToDelete))
       
    }

    return(
        <button name="delete" onClick={() => handleDelete(post.id)}>Delete</button>
    )
}

export default Delete