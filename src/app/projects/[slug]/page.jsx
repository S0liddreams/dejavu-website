import projectData from "@/data/projectData";
import ProjectComponent from "../../../components/projectPageComponent/ProjectComponent";

export async function generateStaticParams() {
  return projectData.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }) {
  const project = projectData.find((p) => p.slug === params.slug);

  if (!project) {
    return <div className="text-center text-red-600 mt-10">Project not found.</div>;
  }

  return <ProjectComponent project={project} />;
}