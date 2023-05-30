import React, { ReactNode } from 'react'
import Header from '../components/Template/Header'
import { Body, Container, Content, Main } from './styles'

export default function Layout(props: { children: ReactNode }) {
  return (
    <Container>
      <Body>
        <Header />
        <Main>
          <Content>{props.children}</Content>
        </Main>
      </Body>
    </Container>
  )
}
