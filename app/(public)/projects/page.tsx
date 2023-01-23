import { client } from "../../../lib/sanity.client";
import { projectList } from "../../../lib/queries";
import ProjectList from "../../../components/ProjectList";
import { notFound } from "next/navigation";

export default async function Projects() {
    const projects = await client.fetch(projectList);

    if (!projects) {
        notFound();
    };

    return (
      <ProjectList projects={projects} />
    )
}