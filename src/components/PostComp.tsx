import React, { useEffect } from "react";

const PostComp = () => {
  useEffect(() => {
    console.log("hello time 12");
  }, []);
  useEffect(() => {
    console.log("hello time 22");
  }, []);

  return <div>Post</div>;
};

export default PostComp;
