import Link from 'next/link'
import React from 'react'

export default function FENav() {
    return (
        <nav className='absolute'>
            <ul className='flex flex-row justify-around'>
                <li>
                    <Link href={'/frontend-mentor'}>Frontend Mentor</Link>
                </li>
                <li>
                    <Link href={'frontend-mentor/qr-code-component'}>QR Code</Link>
                </li>
            </ul>
        </nav>
    )
}
