import { useState } from 'react'
import DataContext from '@/contexts/DataContext'
import type { FC } from 'react'
import type { DataContextProps } from '@/contexts/DataContext'

const DataProvider: FC<DataProviderProps> = ({ children }) => {
  const [dark, darkUpdate] = useState(false)
  return <DataContext.Provider value={{ dark, darkUpdate }}>{children}</DataContext.Provider>
}

type DataProviderProps = DataContextProps & {
  children: JSX.Element | JSX.Element[]
}

export default DataProvider
