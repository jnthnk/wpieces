import { Html, Head, Main, NextScript } from 'next/document'
import type { FC } from 'react'

const Document: FC = () => (
  <Html className='tracking-wide md:text-[17px] xl:text-[18px] scroll-smooth'>
    <Head />
    <body className='min-w-[320px] text-white bg-gray-900'>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
