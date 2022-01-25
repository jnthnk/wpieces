import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Single from '@/components/Single'
import PageProvider from '@/components/PageProvider'
import type { FC } from 'react'
import type { GetStaticPaths, GetStaticProps } from 'next'
import type { PageProps } from '@/types/PageProps'

const SinglePage: FC<SinglePageProps> = ({ code, tags, title, content }) => {
  return (
    <PageProvider name='single'>
      <Single tags={tags} title={title} content={content} />
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
  const { tags, title } = data
  return {
    props: {
      code,
      tags,
      title,
      content
    }
  }
}

type SinglePageProps = PageProps & {
  code: string
  tags: string[]
  title: string
  content: string
}

export default SinglePage
export { getStaticPaths, getStaticProps }
export type { SinglePageProps }
