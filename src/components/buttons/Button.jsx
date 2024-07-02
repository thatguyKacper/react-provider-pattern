import { useContext } from 'react'
import { DarkModeContext } from '../../contexts/DarkModeContext'

export default function Button({ children, ...rest }) {
  const { isDarkMode } = useContext(DarkModeContext)
  const style = {
    backgroundColor: isDarkMode ? '#333' : '#CCC',
    border: '1px solid',
    color: 'inherit',
  }
  return (
    <button style={style} {...rest}>
      {children}
    </button>
  )
}
