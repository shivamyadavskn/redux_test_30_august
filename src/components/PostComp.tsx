import React, { useEffect } from "react";

const PostComp = () => {
  useEffect(() => {
    console.log("🔥 Shivam Branch version running...");
  }, []);

  return (
    <div>
      <h2>Post from Shivam Branch code from "PostComp.tsxx" new branch new again</h2>
    </div>
  );
};

export default PostComp;
