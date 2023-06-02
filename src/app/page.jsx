import Image from "next/image";
import classes from "./page.module.css";
import { blogs } from "@/lib/data";
import BlogCard from "@/components/blogCard/BlogCard";

export default function Home() {
  return (
    <div className={classes.container}>
      <h2>Blog Website</h2>
      <div className={classes.wrapper}>
        {blogs.map((blog) => (
          <BlogCard
            key={blog.title}
            blog={blog}
          />
        ))}
      </div>
    </div>
  );
}
