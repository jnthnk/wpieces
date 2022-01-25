import fs from 'fs'
import path from 'path'
import Archive from '@/components/Archive'
import PageProvider from '@/components/PageProvider'
import type { FC } from 'react'
import type { GetStaticProps } from 'next'
import type { PageProps } from '@/types/PageProps'
import type { CardProps } from '@/components/Card'

const ArchivePage: FC<ArchivePage> = ({ cards }) => (
  <PageProvider name='project'>
    <Archive cards={cards} title='About this Project' />
  </PageProvider>
)

const getStaticProps: GetStaticProps = async () => {
  const dir = path.resolve('./src/contents/snippets.json')
  const content = fs.readFileSync(dir, 'utf-8')
  const cards = JSON.parse(content)
  return {
    props: {
      cards
    }
  }
}

type ArchivePage = PageProps & {
  cards: CardProps[]
}

export default ArchivePage
export { getStaticProps }
