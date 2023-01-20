import { groq } from "next-sanity";

export const homepage = groq`
    *[_type == 'homepage']{
        cta{
            link->{slug}, 
            title  
        },
        title,
    }
`

export const projectList = groq`
    *[_type == 'projects']{
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