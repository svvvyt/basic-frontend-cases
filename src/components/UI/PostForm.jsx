import React from "react";

import { MyButton } from "./Button/MyButton";
import { MyInput } from "./Input/MyInput";

export const PostForm = ({ onAdd }) => {
  const [post, setPost] = React.useState({ title: "", body: "" });

  const handleAddPost = (event) => {
    event.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    onAdd(newPost);
    setPost({ title: "", body: "" }); // обнуляем инпуты
  };

  return (
    <div>
      <form>
        <MyInput
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          value={post.title}
          type="text"
          placeholder="Название поста"
        />
        <MyInput
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          value={post.body}
          type="text"
          placeholder="Описание поста"
        />
        <MyButton onClick={handleAddPost}>Создать пост</MyButton>
      </form>
    </div>
  );
};
