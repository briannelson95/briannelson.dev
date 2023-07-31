import { Metadata } from 'next'
import React from 'react'
import { Roboto } from 'next/font/google';
import Newsletter from '@/components/fecomps/Newsletter';

const roboto = Roboto({
    weight: ['400', '700'],
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: "Newsletter Sign Up | Frontend Mentor"
}

export default function page() {
    return (
        <main className={`${roboto.className} text-[16px] bg-newsletter-charcoal-gray w-full h-screen md:flex md:justify-center md:items-center`}>
            <Newsletter />
        </main>
    )
}