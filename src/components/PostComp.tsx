import React, { useEffect } from "react";

const PostComp = () => {
  useEffect(() => {
    console.log("🔥 Shivam Branch version running...");
  }, []);

  return (
    <div>
      <h2>Post from Shivam Branch</h2>
    </div>
  );
};

export default PostComp;
