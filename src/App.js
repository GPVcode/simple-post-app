import React, { useState } from "react";
import "./App.css";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

function App() {

  const initialState = {
    id: "",
    type: "Text",
    content: ""
  }
  //use formData usestate to save form input to local state
  const [ formData, setFormData ] = useState({...initialState})
  const [type, setType] = useState("Text");
  //use posts usestate to store array of form submissions
  const [posts, setPosts] = useState([]);

  // TODO: Add the ability for the <PostCreate /> component to create new posts.
  // TODO: Add the ability for the <PostList /> component to delete an existing post.

  return (
    <div className="App">
      <PostCreate 
        initialState={initialState}
        setFormData={setFormData}
        formData={formData}
        type={type}
        setType={setType}
        posts={posts}
        setPosts={setPosts}
      />
      <PostList 
        posts={posts}
        setPosts={setPosts}
        type={type}
      />
    </div>
  );
}

export default App;
