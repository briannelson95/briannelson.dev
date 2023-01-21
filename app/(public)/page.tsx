import { previewData } from "next/headers";
import { homepage, projectList } from "../../lib/queries";
import { client } from "../../lib/sanity.client";
import PreviewSuspense from "../../components/PreviewSuspense"
import ProjectList from "../../components/ProjectList";
import PreviewProjectList from "../../components/PreviewProjectList";

export const revalidate = 21600;

export default async function Home() {
    const data = await client.fetch(homepage)
    const projects = await client.fetch(projectList)
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
            <h1 className='text-3xl font-bold underline'>Hello World</h1>
            <ProjectList projects={projects} />
        </div>
    )
}