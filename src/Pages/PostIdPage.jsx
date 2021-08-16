import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";

import PostService from "../API/PostService";

import { MyLoader } from "../components/UI/Loader/MyLoader";

export const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostByID, isCommentsLoading, error] = useFetching(async (id) => {
    const response = await PostService.getByID(id);
    setPost(response.data);
  });

  const [fetchPostComments, isLoading, commentsLoadError] = useFetching(
    async (id) => {
      const response = await PostService.getCommentsByID(id);
      setComments(response.data);
    }
  );

  useEffect(() => {
    fetchPostByID(params.id);
    fetchPostComments(params.id);
  }, []);

  return (
    <div>
      <h1>Post with id {params.id} has been opened</h1>
      {isLoading ? (
        <MyLoader />
      ) : (
        <div>
          {post.id}. {post.title}
        </div>
      )}

      <h1>Comments:</h1>
      {isCommentsLoading ? (
        <MyLoader />
      ) : (
        <div>
          {comments.map((comm) => (
            <div key={comm.id} style={{ marginTop: 15 }}>
              <h5>{comm.email}</h5>
              <div>{comm.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
