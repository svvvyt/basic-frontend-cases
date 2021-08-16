import React from "react";
import { useHistory } from "react-router-dom";

import { MyButton } from "./Button/MyButton";

export const PostItem = ({ post, number, onRemove }) => {
  const router = useHistory();

  return (
    <div className="post">
      <div className="post__content">
        <div>
          {post.id}. {post.title}
        </div>
        <div>{post.body}</div>
      </div>
      <div className="post__buttons">
        <MyButton onClick={() => router.push(`/posts/${post.id}`)}>
          Открыть
        </MyButton>
        <MyButton onClick={() => onRemove(post)}>Удалить</MyButton>
      </div>
    </div>
  );
};
