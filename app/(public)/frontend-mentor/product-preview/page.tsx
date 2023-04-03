import Product from '@/components/fecomps/Product'
import { client } from '@/lib/sanity.client'
import { groq } from 'next-sanity'
import React from 'react'

async function getData() {
    const res = await client.fetch(groq`
        *[_type == "frontend" && title == "Product Preview"][0]{
            productPrev {
                ...,
                mobileImage -> {
                    alt,
                    image
                },
                deskImage -> {
                    alt,
                    image
                }
            }
        }
    `)

    return res
}

export const metadata = {
    title: "Product Preview | Frontend Mentor"
}

export default async function ProductPreview() {
    const data = await getData()

    return (
        <main className='px-4 py-7 bg-product-cream h-screen overflow-hidden sm:flex justify-center items-center'>
            <Product 
                category={data.productPrev.category} 
                title={data.productPrev.title} 
                desc={data.productPrev.desc}
                price={data.productPrev.price.newPrice}
                oldPrice={data.productPrev.price.ogPrice}
                image={data.productPrev.deskImage}
                mobileImage={data.productPrev.mobileImage}
            />
        </main>
    )
}
