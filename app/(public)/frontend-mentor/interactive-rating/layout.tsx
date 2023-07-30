import React from 'react';
import { Overpass } from 'next/font/google';

const overpass = Overpass({
    subsets: ['latin']
})

export default function layout({children}: {children: React.ReactNode}) {
    return (
        <div className={overpass.className}>
            {children}
        </div>
    )
}
