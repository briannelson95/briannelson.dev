import FENav from "../../../components/FENav"
import "../../../styles/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className='max-w-7xl mx-auto bg-white'>
        <FENav />
        {children}
      </body>
    </html>
  )
}
