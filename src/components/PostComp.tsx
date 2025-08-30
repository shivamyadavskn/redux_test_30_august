import React, { useEffect } from "react";

const PostComp = () => {
  useEffect(() => {
    console.log("hello time 1");
  }, []);
  useEffect(() => {
    console.log("hello time 2");
  }, []);

  return <div>Post</div>;
};

export default PostComp;
