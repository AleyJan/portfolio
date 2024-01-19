
import type { Metadata } from 'next'
import { Inter,Roboto_Serif } from 'next/font/google'
import './globals.css'
import Navbar from './components/navBar/page'



const inter = Inter({ subsets: ['latin'],variable:"--inter" })
const roboto = Roboto_Serif({ subsets: ['latin'],variable:"--roboto", weight:"400" })

export const metadata: Metadata = {
  title: 'ALI JAN',
  description: 'My Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={(inter.variable,roboto.variable)}>
        <Navbar/>
        
        
        {children}</body>
    </html>
  )
}
