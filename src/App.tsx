import { useState } from "react";
import { useAppDispatch } from "./app/hook";
import { createPost } from "./features/posts/postsSlice";
import ParentContainer from "./components/ParentContainer";

function App() {

  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");


  const handleCreatePost = () => {
    if (title && body) {
      dispatch(createPost({ title, body }));
      setTitle("");
      setBody("");
    }
  };

  return (
    <div>
      <h2>Create Post</h2>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Body"
      />
      <button onClick={handleCreatePost}>Submit</button>


      <ParentContainer />
    </div>
  );
}

export default App;
