import React, { useEffect, Suspense } from "react";
import { Post } from "../features/posts/postsTypes";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { fetchPosts } from "../features/posts/postsSlice";

// Lazy load the component
const LazyPostComponents = React.lazy(() => import("./PostComp"));

const ParentContainer = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts()) ;
  }, [dispatch]);

  return (
    <>
      {/* Wrap lazy components inside Suspense */}
      <Suspense fallback={<p>Loading Post Component...</p>}>
        <LazyPostComponents />
      </Suspense>

      <h1>Posts</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {data.map((post: Post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>: {post.body}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ParentContainer;
