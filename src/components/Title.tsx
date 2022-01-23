import type { FC } from 'react'

const Title: FC<TitleProps> = ({ tag: Tag = 'h1', size = 'md', children, className }) => (
  <Tag
    className={`block font-semibold tracking-wider ${
      size === 'xs'
        ? 'text-lg'
        : size === 'sm'
        ? 'text-xl'
        : size === 'md'
        ? 'text-2xl md:text-3xl'
        : size === 'lg'
        ? 'text-3xl md:text-4xl xl:text-5xl'
        : 'font-extrabold text-5xl md:text-6xl xl:text-7xl'
    }${className ? ` ${className}` : ''}`}
  >
    {children}
  </Tag>
)

type TitleProps = {
  tag?: keyof JSX.IntrinsicElements
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  children: string | JSX.Element | (string | JSX.Element)[]
  className?: string
}

export default Title
export type { TitleProps }
