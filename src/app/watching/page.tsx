import type { Metadata } from "next";
import WatchingContent from "./WatchingContent";

export const metadata: Metadata = {
  title: "Watching",
  description:
    "Movies and shows I have watched or am watching. Personal recommendations and watch list.",
  robots: { index: false, follow: false },
};

export default function WatchingPage() {
  return <WatchingContent />;
}
