"use client"

import Link from 'next/link';
import React, { useState } from 'react'

export function MenuIcon(){
    return (
        <svg width="40" height="17" xmlns="http://www.w3.org/2000/svg"><g fill="#00001A" fillRule="evenodd"><path d="M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z"/><path d="M0 0h40v3H0z"/></g></svg>
    )
}

export function CloseIcon(){
    return (
        <svg width="32" height="31" xmlns="http://www.w3.org/2000/svg"><g fill="#00001A" fillRule="evenodd"><path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z"/><path d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z"/></g></svg>
    )
}

export default function NewsNav({nav}: any) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <div className={`absolute top-0 w-full min-h-screen ${open ? 'bg-news-dark-blue/40' : 'bg-unset'} px-4 py-7`}>
            <div className='flex justify-between'>
                <p>Logo</p>
                <div onClick={handleOpen} className='z-50'>
                    {open ? <CloseIcon /> : <MenuIcon />}
                </div>
            </div>
            <nav className={`${open ? 'visible z-40' : 'hidden'} bg-news-off-white text-news-dark-blue min-h-screen absolute right-0 top-0 w-2/3 flex flex-col justify-center pl-6`}>
                <ul className=''>
                    {nav.map((item: string, index: any) => (
                        <Link key={index} href={`/frontend-mentor/news//#${item.toLowerCase()}`}>
                            <li className='p-3 font-bold'>
                                {item}
                            </li>
                        </Link>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
