import styled from 'styled-components'

export const Content = styled.div`
  display: block;
  position: fixed;
  width: 100vw;
  overflow: hidden;
  height: 4.875rem;
  border-bottom: 2px #333 solid;
  z-index: 200;
  background-color: ${(props) => props.theme.palette.background.paper};
`
