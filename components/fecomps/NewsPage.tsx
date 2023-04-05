import urlFor from '@/lib/urlFor'
import Image from 'next/image'
import React from 'react'
import { inter } from '@/app/(public)/frontend-mentor/news/fonts';
import Link from 'next/link';

export default function NewsPage({featuredPost}: any) {
    return (
        <div className={`${inter.className} text-news-dark-blue`}>
            <section className='space-y-5' id='popular'>
                <Image 
                    src={urlFor(featuredPost.image.image).url()}
                    alt={featuredPost.image.alt}
                    width={1000}
                    height={1000}
                    className='object-cover h-[300px]'
                />
                <h1 className='font-extrabold text-[40px] leading-[0.95] tracking-[0.25px]'>{featuredPost.title}</h1>
                <p className='text-news-dark-grayish-blue'>{featuredPost.previewText}</p>
                <Link href={''}>
                    <button className='bg-news-soft-red text-news-off-white uppercase py-3 px-5 tracking-[4.1px] my-5'>Read More</button>
                </Link>
            </section>
            <section className='bg-news-dark-blue py-5 px-4'>
                <h2 className='text-3xl text-news-soft-orange font-bold tracking-[1.2px]' id='new'>New</h2>
                <article></article>
            </section>
        </div>
    )
}
