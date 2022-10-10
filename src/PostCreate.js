import React from "react";

/**
 * Displays the form to create a new post, which can be either an image or a text post.
 *
 * When the form is submitted, a new post is created and the form contents cleared.
 */
function PostCreate({initialState, posts, formData, setFormData, type, setType}) {

  const newPost = {
    id: posts.length + 1,
    type: type,
    content: formData.content
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    posts.push(newPost)
    setFormData({ ...initialState })
    console.log(posts.id)
  }

  return (
    <form name="create" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Create</legend>
        <div>
          <label htmlFor="type">Type: </label>
          <select 
            id="type" 
            name="type" 
            required={true}
            onChange={(event)=> setType(event.target.value)}
            value={type}
          >
            <option>Text</option>
            <option>Image</option>
          </select>
        </div>
        <div>
          <label htmlFor="content">Content: </label>
          {type === "Text" ? (
            <textarea 
              id="content" 
              name="content" 
              onChange={handleChange}
              value={formData.content}
              required={true} 
              rows={3} />
          ) : (
            <input 
              id="content" 
              name="content" 
              type="url" 
              onChange={handleChange}
              value={formData.content}
              required={true} />
          )}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </fieldset>
    </form>
  );
}

export default PostCreate;
