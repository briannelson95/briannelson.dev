import RatingCard from '@/components/fecomps/RatingCard'
import React from 'react'

export const metadata = {
    title: "Interacrive Rating | Frontend Mentor"
}

export default function page() {
    return (
        <main className='bg-rating-very-dark-blue text-rating-white w-full min-h-screen flex justify-center items-center'>
            <RatingCard />
        </main>
    )
}
