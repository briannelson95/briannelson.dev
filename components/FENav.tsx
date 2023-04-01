"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import {MenuIcon} from '@sanity/icons'

type Navigation = {
    title: string;
    slug: Slug;
}

type Slug = {
    "_type": 'slug';
    "current": string;
}

type Props = Navigation[]

export default function FENav({props}: any) {
    const [open, setOpen] = useState(false);

    return (
        <nav className='absolute'>
            <div className='relative'>
                <MenuIcon className='z-50 absolute bg-black rounded-full text-white m-2' height={40} width={40} onClick={() => setOpen(!open)} />
                <div className={`${open ? 'bg-slate-500 z-0 w-full rounded-br-lg' : 'hidden'} `}>
                    <h2 className='text-2xl font-semibold pt-3 pl-16'><Link href='../frontend-mentor' onClick={() => setOpen(!open)}>Frontend Mentor</Link></h2>
                    <ul className='pt-4 px-4 pb-2'>
                        {props.map((item: { slug: { current: any }; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }, index: React.Key | null | undefined) => (
                            <li key={index} className='w-full bg-slate-400 my-2 px-4 py-2 rounded-md font-medium hover:bg-slate-300 transition-all duration-200 ease-in-out'>
                                <Link href={`../frontend-mentor/${item.slug.current}`} onClick={() => setOpen(!open)}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                
            </div>
        </nav>
    )
}
