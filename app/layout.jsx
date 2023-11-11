import './globals.css'
import { Great_Vibes } from "next/font/google"
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

const greatvibes = Great_Vibes({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-greatvibes",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${greatvibes.variable} font-montserrat border-solid border-2 border-[##A9A9A9] 
      border-t-[#191919] mx-20 my-0 bg-[#191919] z-0 sm:max-md:mx-0`}>
        <div className=""><Navbar /></div>
        {children}
        <Footer />
      </body>
    </html>
  )
}