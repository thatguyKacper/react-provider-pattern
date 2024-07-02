import useDarkMode from '../hooks/useDarkMode'
import Header from './Header'

export default function Main() {
  const { isDarkMode } = useDarkMode()
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
}
