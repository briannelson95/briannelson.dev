import Navbar from '@/components/Navbar'
import { client } from '@/lib/sanity.client'
import '@/styles/globals.css'
import { Navigation } from '@/typings'
import { Metadata } from 'next'
import { groq } from 'next-sanity'

export const metadata: Metadata = {
  title: "Brian Nelson | Web Developer",
  description: "Brian Nelson, once a videographer now a web developer. Website Developer based in the Northshore of Masschusetts, just north of Boston.",
  keywords: [
      "Web Developer", 
      "Website Developer", 
      "Website", 
      "Developer", 
      "Web", 
      "Northshore Website Developer", 
      "Boston Website Developer",
      "Boston Website Builder",
      "Website Builder"
  ],
  openGraph: {
      title: 'Brian Nelson | Web Developer',
      description: "Brian Nelson, once a videographer now a web developer. Website Developer based in the Northshore of Masschusetts, just north of Boston.",
      url: 'https://briannelson.dev',
      siteName: 'BrianNelson.dev',
      images: [
        {
          url: 'https://www.briannelson.dev/social-preview.webp',
          width: 800,
          height: 600,
        },
      ],
      locale: 'en-US',
      type: 'website',
  },
  robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const navigation: Navigation = await client.fetch(groq`
    *[_type == "navigation"][0]{
      navigation[]->{
        title,
        slug {
          current   
        }
      }  
    }
  `)

  return (
    <html className='overflow-x-hidden'>
      <head />
      <body className='max-w-7xl mx-auto dark:bg-zinc-800 dark:text-white overflow-x-hidden'>
        <Navbar navigation={navigation} />
        <div className='px-4 md:px-10'>
          {children}
        </div>
      </body>
    </html>
  )
}
