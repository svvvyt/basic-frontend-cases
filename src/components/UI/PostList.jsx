import React from "react";
import { PostItem } from "./PostItem";

export const PostList = ({ posts, title, onRemove }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>Посты не найдены</h1>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {posts.map((post, index) => (
        <PostItem
          onRemove={onRemove}
          post={post}
          key={post.id}
          number={index + 1}
        />
      ))}
    </div>
  );
};
