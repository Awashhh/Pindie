import './globals.css'

import {Header} from "./Components/Header/Header"
import { Footer } from './Components/Footer/Footer'

export const metadata = {
  title: 'Pindie',
  description: 'Портал инди-игр для студентов Яндекс Практикума',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}