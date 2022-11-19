import { useState } from "react";
import MarkdownCard from "../../components/MarkdownCard";
import type { IPost } from "../../services/postService";

const App = ({ blogData }: { blogData: IPost[] }) => {
  return (
    <main>
      <h1>Blogs</h1>
      {!blogData.length && <>Loading...</>}
      {blogData.map((blog) => (
        <div className="blog-container" key={blog.fileName}>
          <h2>{blog.fileName}</h2>
          <MarkdownCard blogContent={blog.body} />
        </div>
      ))}
    </main>
  );
};

export default App;
