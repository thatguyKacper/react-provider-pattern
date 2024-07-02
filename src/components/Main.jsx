import { useContext, memo } from 'react'
import { DarkModeContext } from '../contexts/DarkModeContext'
import Header from './Header'

const Main = memo(function Main() {
  const { isDarkMode } = useContext(DarkModeContext)
  const style = {
    color: isDarkMode ? 'white' : 'black',
    backgroundColor: isDarkMode ? 'black' : 'white',
    margin: '-8px',
    minHeight: '100vh',
    boxSizing: 'border-box',
  }
  return (
    <main style={style}>
      <Header />
      <h1>Provider Pattern</h1>
    </main>
  )
})

export default Main
