import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  overflow: hidden;
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  width: 100vw;
`
export const Main = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  max-height: calc(100% - 48px);
`
export const Content = styled.div`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  height: 100%;
  margin: 4.875rem 0 0 0;
`
