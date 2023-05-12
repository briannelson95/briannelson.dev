import urlFor from '@/lib/urlFor'
import Image from 'next/image'
import React from 'react'
import { inter } from '@/app/(public)/frontend-mentor/news/fonts';
import Link from 'next/link';

export default function NewsPage({featuredPost, posts}: any) {
    var newCategory: string = "New";
    var trending: string = "Trending";

    const newPosts = posts.filter(function(itm: any){
        return newCategory.indexOf(itm.category) > -1
    })

    const trendingPosts = posts.filter(function(itm: any){
        return trending.indexOf(itm.category) > -1
    })

    console.log(trendingPosts)
    return (
        <div className={`${inter.className} text-news-dark-blue space-y-16 mb-20`}>
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
                    <button className='bg-news-soft-red text-news-off-white uppercase py-3 px-5 tracking-[4.1px] mt-5'>Read More</button>
                </Link>
            </section>

            <section className='bg-news-dark-blue text-news-off-white py-5 px-5'>
                <h2 className='text-3xl text-news-soft-orange font-bold tracking-[1.2px] mb-8' id='new'>New</h2>
                {newPosts.map((item: any, index: any) => {
                    if (index == newPosts.length - 1) {
                        return (
                            <article key={index} className=" space-y-5">
                                <h3 className='font-bold text-xl'>{item.title}</h3>
                                <p>{item.previewText}</p>
                            </article>
                        )
                    }
                    return (
                        <article key={index} className=" space-y-5">
                            <h3 className='font-bold text-xl'>{item.title}</h3>
                            <p>{item.previewText}</p>
                            <hr className='pb-6' />
                        </article>
                    )
                })}
            </section>

            <section className='space-y-8'>
                {trendingPosts.map((item: any, index: number) => (
                    <article key={index} className="grid grid-cols-3 gap-6">
                        <Image
                            src={urlFor(item.image.image).url()}
                            height={200}
                            width={200}
                            alt={item.image.alt}
                            className="h-full w-full"
                        />
                        <div className='col-span-2 space-y-2'>
                            <i className='not-italic text-3xl font-bold text-news-grayish-blue'>{(index + 1).toString().padStart(2, '0')}</i>
                            <h3 className='text-xl font-bold'>{item.title}</h3>
                            <p>{item.previewText}</p>
                        </div> 
                    </article>
                ))}
            </section>
        </div>
    )
}
