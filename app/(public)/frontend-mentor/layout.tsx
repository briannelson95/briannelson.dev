import FENav from "@/components/FENav"
import { client } from "@/lib/sanity.client"
import "@/styles/globals.css"
import { groq } from "next-sanity"

export const revalidate = 172800;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const data = await client.fetch(groq`*[_type == "frontend"] | order(_createdAt asc) {title, slug}`)
  return (
    <html>
      <body className=''>
        <FENav props={data} />
        {children}
      </body>
    </html>
  )
}
