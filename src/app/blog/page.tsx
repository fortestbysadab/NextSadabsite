import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Writing about what I build, what I break, and what I learn along the way.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  return <BlogContent posts={posts} />;
}
