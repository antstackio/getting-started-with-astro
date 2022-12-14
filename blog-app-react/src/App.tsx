import React, { useEffect, useState } from "react";
import MarkdownCard from "./components/MarkdownCard";
import { getPosts, IPost } from "./services/postService";

const App = () => {
  const [blogs, setBlogs] = useState<IPost[]>([]);
  useEffect(() => {
    const fetchBlogPosts = async () => {
      const messages = await getPosts(5);
      setBlogs(messages);
    };
    fetchBlogPosts();
  }, []);

  return (
    <main>
      <h1>Blogs</h1>
      {!blogs.length && <>Loading...</>}
      {blogs.map((blog) => (
        <div className="blog-container" key={blog.fileName}>
          <h2>{blog.fileName}</h2>
          <MarkdownCard blogContent={blog.body} />
        </div>
      ))}
    </main>
  );
};

export default App;
