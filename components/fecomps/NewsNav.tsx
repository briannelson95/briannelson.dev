"use client"

import React, { useState } from 'react'

export function MenuIcon(){
    return (
        <svg width="40" height="17" xmlns="http://www.w3.org/2000/svg"><g fill="#00001A" fill-rule="evenodd"><path d="M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z"/><path d="M0 0h40v3H0z"/></g></svg>
    )
}

export function CloseIcon(){
    return (
        <svg width="32" height="31" xmlns="http://www.w3.org/2000/svg"><g fill="#00001A" fill-rule="evenodd"><path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z"/><path d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z"/></g></svg>
    )
}

export default function NewsNav({nav}: any) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <div>
            <div className='flex justify-between'>
                <p>Logo</p>
                <div onClick={handleOpen}>
                    {open ? <CloseIcon /> : <MenuIcon />}
                </div>
            </div>
            <nav className={`${open ? 'visible' : 'hidden'}`}>
                <ul className=''>
                    {nav.map((item: string, index: any) => (
                        <li key={index}>
                            {item}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
