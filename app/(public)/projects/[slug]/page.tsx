import { PortableText } from "@portabletext/react"
import Image from "next/image"
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, Key } from "react"
import { RichTextComponent } from "../../../../components/RichTextComponents"
import { singleProject } from "../../../../lib/queries"
import { client } from "../../../../lib/sanity.client"
import urlFor from "../../../../lib/urlFor"

type Props = {
    params: {
        slug: string
    }
}

export default async function ProjectPage({params: {slug}}: Props) {
    
    const project: any = await client.fetch(singleProject, { slug });
    // console.log(post)
    
    return (
        <article className="px-10 pb-28">
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

                    <section className="p-5 bg-violet-500 w-full">
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
            <PortableText value={project.body} components={RichTextComponent} />
        </article>
    )
}