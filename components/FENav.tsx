"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import {MenuIcon} from '@sanity/icons'

export default function FENav() {
    const [open, setOpen] = useState(false);

    return (
        <nav className='absolute'>
            {open 
                ? <ul className='flex flex-row justify-around'>
                    <li>
                        <Link href={'/frontend-mentor'}>Frontend Mentor</Link>
                    </li>
                    <li>
                        <Link href={'frontend-mentor/qr-code-component'}>QR Code</Link>
                    </li>
                </ul>
                : <MenuIcon height={20} width={20} onClick={() => setOpen(!open)} />
            }
        </nav>
    )
}
