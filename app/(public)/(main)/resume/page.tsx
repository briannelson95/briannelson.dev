import React from 'react'
import { IBM_Plex_Mono } from 'next/font/google';

const ibmPlexMono = IBM_Plex_Mono({
    subsets: ['latin'],
    weight: ['400', '700']
})

export default function ResumePage() {
    return (
        <main className={`${ibmPlexMono.className} mx-10 space-y-4 mb-12`}>
            <h1>Name: Brian Nelson - Developer</h1>
            <section>
                <h2 className='font-bold'>Skills</h2>
                <h3>Technologies:</h3>
                <ul className='flex gap-2 ml-6'>
                    <li>Adobe Suite,</li>
                    <li>React JS,</li>
                    <li>NextJS,</li>
                    <li>TailwindCSS,</li>
                    <li>Sanity CMS,</li>
                    <li>Wordpress,</li>
                    <li>Google Analytics 4</li>
                    <li>Google Adsense</li>
                </ul>
                <h3>Languages:</h3>
                <ul className='flex gap-2 ml-6'>
                    <li>Typescript,</li>
                    <li>Javascript,</li>
                    <li>CSS,</li>
                    <li>HTML,</li>
                    <li>PHP</li>
                </ul>
            </section>
            <section>
                <h2 className='font-bold'>History</h2>
                <div className='ml-6'>
                    <h3 className='underline'>Sperling Interactive</h3>
                    <div className='flex justify-between'>
                        <h4 className='ml-6'>Project Manager, Videographer</h4>
                        <p>June 2021 - January 2023</p>
                    </div>
                    <ul className="list-inside list-['-_'] ml-12">
                        <li>Managed a caseload of 30+ clients with digital marketing and media projects</li>
                        <li>Conducted weekly meetings with external and internal stakeholders to keep projects on pace and review content, deliverables and make adjustments as needed</li>
                        <li>Orchestrated work from web development, design and marketing teams to ensure smooth production</li>
                        <li>Trained clients on new systems (CMS, administration, operations)</li>
                        <li>Automated processes to reduce the data entry workload of project managers</li>
                        <li>Led 100+ video projects to support content creation for promotional, website and social content</li>
                    </ul>
                </div>
                <div className='ml-6'>
                    <h3 className='underline'>Northshore Education Consortium</h3>
                    <div className='flex justify-between'>
                        <h4 className='ml-6'>Media Teacher Aide</h4>
                        <p>Oct. 2018 - June 2021 & Jan. 2023 - Present</p>
                    </div>
                    <ul className="list-inside list-['-_'] ml-12">
                        <li>Teach introductory level web development classes to high school students</li>
                        <li>Assist in teaching media production classes focused on student-driven and project-based learning</li>
                        <li>Aide in the academic and emotional support for all students by holding all to high academic standards and behavior expectations</li>
                        <li>Communicate regularly and effectively with colleagues and families to track student progress</li>
                    </ul>
                </div>
                <div className='ml-6'>
                    <h3 className='underline'>Brian Nelson Films</h3>
                    <div className='flex justify-between'>
                        <h4 className='ml-6'>Owner, Video Lead</h4>
                        <p>March 2017 - June 2021</p>
                    </div>
                    <ul className="list-inside list-['-_'] ml-12">
                        <li>Managed all business activities including conducting multiple projects simultaneously, meeting client deadlines through all stages including discovery, production, review and delivery</li>
                        <li>Directed videography on the day of the shoot and leads drone operations for aerial imaging</li>
                    </ul>
                </div>
            </section>
        </main>
    )
}
