import { previewData } from "next/headers";
import { homepage, projectList } from "../../../lib/queries";
import { client } from "../../../lib/sanity.client";
import PreviewSuspense from "../../../components/PreviewSuspense"
import ProjectList from "../../../components/ProjectList";
import PreviewProjectList from "../../../components/PreviewProjectList";
import { Projects } from "../../../typings";

export const revalidate = 60;

export default async function Home() {
    const data = await client.fetch(homepage)
    const projects = await client.fetch(projectList)
    // console.log(data.projects[0])

    // let p1: Projects = data.projects[0]
    // console.log(p1)
    if (previewData()) {
        return (
            <PreviewSuspense fallback={(
                <div role='status'>
                    <p className="text-center text-lg animate-pulse">
                        Loading Preview Data...
                    </p>
                </div>
            )}>
                {/* PreviewProjectList */}
                <PreviewProjectList query={projectList} />
            </PreviewSuspense>
        )
    }

    
    // console.log(projects)
    return (
        <div>
            <ProjectList projects={projects} />
        </div>
    )
}