import React from 'react'
import Results from '@/components/fecomps/Results'
import { client } from '@/lib/sanity.client'
import { groq } from 'next-sanity'

async function getData() {
    const res = await client.fetch(groq`
        *[_type == "frontend" && title == "Results Summary Component"][0]
    `)

    return res;
}

const metadata = {
    title: "Results Summary | BrianNelson.dev"
}

export default async function ResultsSummary() {
    
    const data = await getData()
    const scores = data.resultsSummary.allResults.resultArr

    return (
        <main className='w-screen h-screen flex justify-center items-center'>
            <Results scores={scores} />
        </main>
    )
}
