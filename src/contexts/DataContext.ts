import { createContext } from 'react'
import type { Dispatch, SetStateAction } from 'react'

const DataContext = createContext<DataContextProps>(null)

type DataContextProps = {
  dark: boolean
  darkUpdate: Dispatch<SetStateAction<boolean>>
}

export default DataContext
export type { DataContextProps }
