import React from 'react'
import { Container } from './styles'

type Props = {
  children: JSX.Element
}

function Main({ children }: Props) {
  return <Container>{children}</Container>
}

export default Main
