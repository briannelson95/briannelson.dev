import Navbar from '@/components/Navbar'
import { client } from '@/lib/sanity.client'
import '@/styles/globals.css'
import { Navigation } from '@/typings'
import { groq } from 'next-sanity'

export const metadata = {
  title: 'BrianNelson.dev'
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
    <html>
      <head />
      <body className='max-w-7xl mx-auto dark:bg-zinc-800 dark:text-white'>
        <Navbar navigation={navigation} />
        {children}
      </body>
    </html>
  )
}
