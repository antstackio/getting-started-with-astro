import React, { useEffect, useState } from "react";
import { getPosts } from "../../services/postService";
import ReactApp from "./ReactApp";
type Props = {};

function ReactCSR({}: Props) {
  const [blogs, setBlogs] = useState([]);
  const fetchBlogPosts = async () => {
    setBlogs([]);
    const messages = await getPosts(5);
    setBlogs(messages);
  };
  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <div>
      <h1 id="csr">CSR</h1>
      <button onClick={fetchBlogPosts}>Refresh Blogs</button>
      {blogs.length ? <ReactApp blogData={blogs} /> : <p>Loading...</p>}
    </div>
  );
}

export default ReactCSR;
