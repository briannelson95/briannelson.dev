import Image from "next/image";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, Key } from "react";
import urlFor from "../lib/urlFor";
import {ArrowRightIcon} from '@sanity/icons'
import ClientSideRoute from "./ClientSideRoute";
import { GitHub, Globe } from "react-feather";
import { Projects } from "../typings";


type Props = {
    projects: Projects;
}


export default function ProjectList({ projects }: Props) {
  // console.log(projects[0])
  return (
    <div>
      <hr className="border-black my-10 dark:border-white"/>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 gap-y-16 pb-20">
        {projects.map((project, index) => (
          <div key={index} className="rounded-b overflow-hidden">
            <ClientSideRoute route={`/projects/${project.slug.current}`}>
              <div className="flex flex-col group cursor-pointer">
                <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                  <Image
                    className="rounded-b object-cover object-left lg:object-center"
                    src={urlFor(project.image.image).url()}
                    alt={project.image.alt}
                    fill
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 w-full bg-opacity-30 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                    <div>
                      <h3 className="font-bold">{project.title}</h3>
                    </div>
                    <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                      {project.tags.splice(0,2).map((category: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }, index: Key | null | undefined) => (
                        <div key={index} className="bg-gradient-to-br from-pink-500 to-indigo-500 before:bg-gradient-to-br before:from-pink-500 before:to-indigo-500 text-center text-white px-3 py-1 rounded-full text-sm font-semibold">
                          <p>{category.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ClientSideRoute> 
            
              {/* <div className="flex flex-col group cursor-pointer"> */}
                <div className="mt-5 flex-1">
                  <p className="underline text-lg font-bold">{project.title}</p>
                  <p className="line-clamp-2">{project.description}</p>
                </div> 

                <div className="flex justify-between align-bottom">
                  <ClientSideRoute route={`/projects/${project.slug.current}`}>
                    <p className="mt-5 font-bold flex items-center group-hover:underline">
                      Read Post
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </p>
                  </ClientSideRoute>
                  
                  <div className="mt-5 font-bold flex items-center">
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
              {/* </div> */}
          </div>
        ))}
      </div>
    </div>
  )
}
