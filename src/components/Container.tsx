import type { FC } from 'react'

const Container: FC<ContainerProps> = ({ tag: Tag = 'div', size = 'md', children, className }) => (
  <Tag
    className={`block px-8 md:w-[750px] md:px-6 md:mx-auto lg:w-[900px] xl:w-[1050px] xl:px-4 2xl:w-[1200px] ${
      size === 'sm'
        ? 'py-8 md:py-12 xl:py-16'
        : size === 'md'
        ? 'py-12 md:py-16 xl:py-20'
        : 'py-16 md:py-20 xl:py-24'
    }${className ? ` ${className}` : ''}`}
  >
    {children}
  </Tag>
)

type ContainerProps = {
  tag?: keyof JSX.IntrinsicElements
  size?: 'sm' | 'md' | 'lg'
  children: string | JSX.Element | (string | JSX.Element)[]
  className?: string
}

export default Container
export type { ContainerProps }
