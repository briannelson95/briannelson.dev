import { PortableText } from "@portabletext/react"
import { groq } from "next-sanity"
import Image from "next/image"
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, Key } from "react"
import { RichTextComponent } from "../../../../../components/RichTextComponents"
import { singleProject } from "../../../../../lib/queries"
import { client } from "../../../../../lib/sanity.client"
import urlFor from "../../../../../lib/urlFor"
import { notFound } from 'next/navigation';
import { GitHub, Globe } from "react-feather"

type Props = {
    params: {
        slug: string
    }
}

export const revalidate = 60;

export async function generateStaticParams() {
    const query = groq`*[_type == 'projects']{ slug }`

    const slugs: any[] = await client.fetch(query)
    const slugRoutes = slugs.map((slug) => slug.slug.current)

    return slugRoutes.map(slug => ({
        slug
    }))
}

export default async function ProjectPage({params: {slug}}: Props) {
    
    const project: any = await client.fetch(singleProject, { slug });
    // console.log(post)

    if (!project) {
        notFound();
    }
    
    return (
        <article className="md:px-10 pb-28 max-w-4xl mx-auto">
            <section className="space-y-2 border border-violet-500 text-white">
                <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
                    <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
                        <Image 
                            src={urlFor(project.image.image).url()} 
                            alt={project.image.alt}
                            className="object-cover object-center mx-auto"
                            fill
                        />                  
                    </div>

                    <section className="p-5 bg-gradient-to-br from-pink-500 to-indigo-500 before:bg-gradient-to-br before:from-pink-500 before:to-indigo-500 w-full">
                        <div className="flex flex-col md:flex-row justify-between gap-y-5">
                            <div>
                                <h1 className="text-4xl font-extrabold">{project.title}</h1>

                                <p>
                                    {new Date(project._createdAt).toLocaleDateString("en-US", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric"
                                    })}
                                </p>
                            </div>
                            <div className="font-bold flex items-center">
                                {project.github 
                                    ? <a href={project.github} target="_blank" rel="noreferrer">
                                        <div className="tooltip">
                                            <GitHub className="h-6 w-6 mx-1 z-50" />
                                            <span className="tooltiptext">View Repo</span>
                                        </div>
                                        </a>
                                    : ''
                                }
                                {project.link 
                                    ? <a href={project.link} target="_blank" rel="noreferrer">
                                        <div className="tooltip">
                                            <Globe className="h-6 w-6 mx-1 z-50" />
                                            <span className="tooltiptext">Visit Website</span>
                                        </div>
                                        </a>
                                    : ''
                                }
                            </div>
                            
                        </div>
                        <div>
                            <p className="italic pt-10">{project.description}</p>
                            <div className="flex items-center justify-end mt-auto space-x-2">
                                {project.tags.map((item: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }, index: Key | null | undefined) => (
                                    <p key={index} className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4">
                                        {item.name}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <section className="max-w-xl mx-auto">
                <PortableText value={project.body} components={RichTextComponent} />
            </section>
        </article>
    )
}