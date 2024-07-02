import { useState } from 'react'
import { DarkModeContext } from '../contexts/DarkModeContext'

export default function DarkModeProvider({ children }) {
  const [isDarkMode, setDarkMode] = useState(false)
  const toggleDarkMode = () => setDarkMode((v) => !v)
  const contextValue = { isDarkMode, toggleDarkMode }

  return (
    <DarkModeContext.Provider value={contextValue}>
      {children}
    </DarkModeContext.Provider>
  )
}
