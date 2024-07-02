import { useState } from 'react'
import { DarkModeContext } from './contexts/DarkModeContext'
import Main from './components/Main'

export default function App() {
  const [isDarkMode, setDarkMode] = useState(false)
  const toggleDarkMode = () => setDarkMode((v) => !v)
  const contextValue = { isDarkMode, toggleDarkMode }

  return (
    <DarkModeContext.Provider value={contextValue}>
      <Main />
    </DarkModeContext.Provider>
  )
}
