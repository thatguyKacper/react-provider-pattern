import { useContext } from 'react'
import { DarkModeContext } from '../../contexts/DarkModeContext'
import Button from './Button'

export default function ToggleButton() {
  const { toggleDarkMode } = useContext(DarkModeContext)

  return <Button onClick={toggleDarkMode}>Toggle mode</Button>
}
