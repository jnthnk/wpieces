import fs from 'fs'
import path from 'path'
import { marked } from 'marked'
import matter from 'gray-matter'
import PageProvider from '@/components/PageProvider'
import type { FC } from 'react'
import type { GetStaticPaths, GetStaticProps } from 'next'
import type { PageProps } from '@/types/PageProps'

const SinglePage: FC<SinglePageProps> = ({ code, content }) => {
  return (
    <PageProvider name='single'>
      <div className='px-8 md:px-12 xl:px-16 py-12 md:py-14 xl:py-16'>
        Single: {code}
        <div dangerouslySetInnerHTML={{ __html: marked(content) }} className='prose' />
      </div>
    </PageProvider>
  )
}

const getStaticPaths: GetStaticPaths = () => {
  const dir = path.resolve('./src/snippets')
  const files = fs.readdirSync(dir)
  const paths = files.map((name) => ({
    params: {
      code: name.replace('.md', '')
    }
  }))
  return {
    paths,
    fallback: false
  }
}

const getStaticProps: GetStaticProps = ({ params }) => {
  const { code } = params
  const dir = path.resolve(`./src/snippets/${code}.md`)
  const file = fs.readFileSync(dir, 'utf-8')
  const { data, content } = matter(file)
  console.log(data)

  return {
    props: {
      code,
      content
    }
  }
}

type SinglePageProps = PageProps & {
  code: string
  content: string
}

export default SinglePage
export { getStaticPaths, getStaticProps }
export type { SinglePageProps }
