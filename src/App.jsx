import { DarkModeContext } from './contexts/DarkModeContext'
import Main from './components/Main'

export default function App() {
  return (
    <DarkModeContext.Provider>
      <Main />
    </DarkModeContext.Provider>
  )
}
