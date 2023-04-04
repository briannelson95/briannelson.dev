import NewsNav from "@/components/fecomps/NewsNav";
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";

export default async function RootLayout({children,}: {children: React.ReactNode}) {
    const data = await client.fetch(groq`*[_type == 'frontend' && title == 'News'][0]{news{nav}}`)

    return (
        <html lang="en-US">
            <body className='bg-news-off-white'>
                <NewsNav nav={data.news.nav}/>
                {children}
            </body>
        </html>
    )
  }