import { useState, useEffect } from 'react'
import DataContext from '@/contexts/DataContext'
import Cookies from 'universal-cookie'
import type { FC } from 'react'

const cookies = new Cookies()
const isDarkModeOn = cookies.get('wpieces-dark-mode') == "true" ? true : false;

const DataProvider: FC<DataProviderProps> = ({ children }) => {
  const [dark, darkUpdate] = useState(false)
  useEffect(() => { darkUpdate(isDarkModeOn)}, [])
  return <DataContext.Provider value={{ dark, darkUpdate }}>{children}</DataContext.Provider>
}

type DataProviderProps = {
  children: JSX.Element | JSX.Element[]
}

export default DataProvider
