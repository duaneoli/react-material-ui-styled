import React from 'react'
import { Content } from './styles'

function Header() {
  const selectHeader = () => {
    return <div />
  }

  return <Content>{selectHeader()}</Content>
}

export default Header
