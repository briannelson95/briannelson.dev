import Header from '../../../components/Header'
import '../../../styles/globals.css'

export const metadata = {
  title: 'BrianNelson.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className='max-w-7xl mx-auto dark:bg-zinc-800 dark:text-white'>
        <Header />
        {children}
      </body>
    </html>
  )
}
