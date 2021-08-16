import React, { useState, useEffect } from "react";

import { PostList } from "../components/UI/PostList";
import { PostForm } from "../components/UI/PostForm";
import { PostFilter } from "../components/UI/PostFilter";
import { MyModal } from "../components/UI/Modal/MyModal";
import { MyButton } from "../components/UI/Button/MyButton";
import { MyLoader } from "../components/UI/Loader/MyLoader";
import { MyPagination } from "../components/UI/Pagination/MyPagination";

import PostService from "../API/PostService";

import { getPageCount } from "../utils/pages";

import { usePosts } from "../hooks/usePosts";
import { useFetching } from "../hooks/useFetching";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sortType: "", searchValue: "" });
  const [visibleModal, setVisibleModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts(response.data);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPageCount(totalCount, limit));
    }
  );

  const sortedAndSearchedPosts = usePosts(
    posts,
    filter.sortType,
    filter.searchValue
  );

  const onAddPost = (newPost) => {
    setPosts([...posts, newPost]);
    setVisibleModal(false);
  };

  const onRemovePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const handleChangePage = (page) => {
    setPage(page);
  };

  useEffect(() => {
    fetchPosts(limit, page);
  }, [limit, page]);

  return (
    <div className="App">
      <MyButton
        style={{ marginTop: "30px" }}
        onClick={() => setVisibleModal(true)}
      >
        Создать пользователя
      </MyButton>

      <MyModal visible={visibleModal} setVisible={setVisibleModal}>
        <PostForm onAdd={onAddPost} />
      </MyModal>

      <PostFilter filter={filter} setFilter={setFilter} />

      <hr style={{ margin: "15px 0" }} />
      {postError && <h1>Произошла ошибка ${postError}</h1>}
      {isPostsLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <MyLoader />
        </div>
      ) : (
        <PostList
          onRemove={onRemovePost}
          posts={sortedAndSearchedPosts}
          title="Посты про джаваскрыпт"
        />
      )}
      <MyPagination
        page={page}
        handleChangePage={handleChangePage}
        totalPages={totalPages}
      />
    </div>
  );
}

export default Posts;
