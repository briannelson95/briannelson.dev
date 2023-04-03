"use client"

import React from 'react'
import { montserrat, fraunces } from '@/app/(public)/frontend-mentor/product-preview/fonts';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import urlFor from '@/lib/urlFor';

type Props = {
    category: string;
    title: string;
    desc: string;
    price?: number;
    oldPrice?: number;
    image: any;
    mobileImage: any;
}

export default function Product({category, title, desc, price, oldPrice, image, mobileImage}: Props) {
    const router = useRouter()

    return (
        <div className={`${montserrat.className} bg-white rounded-[10px] text-product-gray-blue text-sm sm:max-w-[600px] sm:grid grid-cols-2`}>
            <Image 
                src={urlFor(mobileImage.image).url()}
                height={500}
                width={500}
                alt={mobileImage.alt}
                className='mb-6 bg-slate-500 h-[240px] rounded-t-[10px] sm:hidden'
                priority
            />
            <Image 
                src={urlFor(image.image).url()}
                height={1000}
                width={1000}
                alt={image.alt}
                className='h-[450px] bg-slate-500 rounded-tl-[10px] rounded-bl-[10px] hidden sm:block'
                priority
            />
            <div className='px-6 pb-6 sm:mt-8 sm:px-9'>
                <h3 className='uppercase tracking-widest pb-2 sm:pb-3'>{category ? category : 'Category'}</h3>
                <h1 className={`${fraunces.className} text-3xl font-bold text-product-dark-blue pb-5`}>{title ? title : 'Product Title'}</h1>
                <p className='pb-5 sm:pb-7'>{desc ? desc : "Product description lorem ipsum"}</p>
                {price 
                    ? <div className='flex items-center space-x-4 pb-6 sm:pb-7'>
                        <h2 className={`${fraunces.className} font-bold text-3xl text-product-dark-cyan`}>{price ? `$${price}` : "$99.99"}</h2>
                        <p className='line-through'>{`$${oldPrice}`}</p>
                    </div>
                    : <h2 className={`${fraunces.className} font-bold text-3xl text-product-dark-cyan pb-6 sm:pb-7`}>{oldPrice ? `$${oldPrice}` : "$99.99"}</h2>
                }
                <button className='bg-product-dark-cyan text-white py-4 w-full flex justify-center items-center rounded-lg hover:bg-[#1a4130] active:bg-[#1a4130] transition-all duration-200 ease-in-out' onClick={() => router.push('../frontend-mentor')}>
                        <svg width="15" height="16" className='mr-2' xmlns="http://www.w3.org/2000/svg"><path d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z" fill="#FFF"/></svg>
                        Add to Cart
                </button>
            </div>
        </div>
    )
}
