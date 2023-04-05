import NewsPage from '@/components/fecomps/NewsPage'
import { client } from '@/lib/sanity.client'
import { groq } from 'next-sanity'
import React from 'react'

export default async function NewsHomepage() {
    const data = await client.fetch(groq`
        *[_type == 'frontend' && title == "News"][0]{
            ...,
            news {
                posts[]->{
                    category,
                    image->{
                        image,
                        alt
                    },
                    previewText,
                    title
                }
            }
        }
    `)

    const featuredPost = data.news.posts[0];

    // console.log(featuredPost.image)

    return (
        <main className='min-h-screen px-4 pt-[88px]'>
            <NewsPage featuredPost={featuredPost}/>
        </main>
    )
}
