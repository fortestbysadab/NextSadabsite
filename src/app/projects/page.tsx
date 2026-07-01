import type { Metadata } from "next";
import ProjectsContent from "./ProjectsContent";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Things I've built to learn, solve a problem, or just see if I could.",
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
