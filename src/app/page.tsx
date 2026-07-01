import { getAllPosts } from "@/lib/posts";
import HomeContent from "./HomeContent";

export default function HomePage() {
  const recent = getAllPosts().slice(0, 3);
  return <HomeContent posts={recent} />;
}
