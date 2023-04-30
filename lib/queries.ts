import { groq } from "next-sanity";

export const homepage = groq`{
    "pageData": *[_type == 'homepage']{
        ...,
        tech[]-> {
            title,
            image->{
                alt,
                image
            }
        },
        cta{
            link->{slug}, 
            title  
        },
        title,
    },
    "projects": *[_type == 'projects'] | order(_updatedAt desc){
        description,
        featured,
        github,
        image->{
            alt,
            image
        },
        link,
        slug,
        tags[]->{
            name
        },
        title
    }
}`

export const projectList = groq`
    *[_type == 'projects'] | order(_updatedAt desc){
        description,
        featured,
        github,
        image->{
            alt,
            image
        },
        link,
        slug,
        tags[]->{
            name
        },
        title
    }
`

export const singleProject = groq`
    *[_type == 'projects' && slug.current == $slug][0]{
        ...,
        image->{
            alt,
            image
        },
        tags[]->{
            name
            
        },
    }
`
