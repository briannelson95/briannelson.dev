import React from 'react'

export default function NewsNav({nav}: any) {
    return (
        <nav>
            <ul className='flex space-x-3'>
                {nav.map((item: string, index: any) => (
                    <li key={index}>
                        {item}
                    </li>
                ))}
            </ul>
        </nav>
    )
}
