import React, { useEffect } from "react";

const PostComp = () => {
  useEffect(() => {
    console.log("🔥 Shivam Branch version running...");
  }, []);

  return (
    <div>
      <h2>Post from Shivam Branch code from "PostComp.tsx" new branch</h2>
    </div>
  );
};

export default PostComp;
