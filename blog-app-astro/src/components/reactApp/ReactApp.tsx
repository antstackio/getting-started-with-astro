import { useState } from "react";
import MarkdownCard from "../../components/MarkdownCard";
import type { IPost } from "../../services/postService";

const App = ({ blogData }: { blogData: IPost[] }) => {
  const [blogs, _] = useState<IPost[]>(blogData);

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
