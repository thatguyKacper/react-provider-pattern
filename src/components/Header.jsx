import { memo } from 'react'
import ToggleButton from './buttons/ToggleButton'

const Header = memo(function Header() {
  const style = {
    padding: '10px 5px',
    borderBottom: '1px solid',
    marginBottom: '10px',
    display: 'flex',
    gap: '5px',
    justifyContent: 'flex-end',
  }
  return (
    <header style={style}>
      <ToggleButton />
    </header>
  )
})

export default Header
