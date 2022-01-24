import { useState } from 'react'
import DataContext from '@/contexts/DataContext'
import type { FC } from 'react'

const DataProvider: FC<DataProviderProps> = ({ children }) => {
  const [dark, darkUpdate] = useState(false)
  return <DataContext.Provider value={{ dark, darkUpdate }}>{children}</DataContext.Provider>
}

type DataProviderProps = {
  children: JSX.Element | JSX.Element[]
}

export default DataProvider
