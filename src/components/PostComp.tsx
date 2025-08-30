import React, { useEffect, useLayoutEffect, useState } from "react";

const PostComp = () => {
  const [count, setCount] = useState(20);

  useLayoutEffect(() => {
    console.log("🚀 Component mounted");
    setCount((prev) => prev + 100);
    console.log("🚀 Component mounted", count);
  }, []);

  useEffect(() => {
    console.log("🔄 Count changed:", count);
  }, [count]);

  useEffect(() => {
    console.log("✨ I run after every render");
  });

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default PostComp;
