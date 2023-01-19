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