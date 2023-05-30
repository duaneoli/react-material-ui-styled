import { createGlobalStyle } from 'styled-components'

function appHeight() {
  const doc = document.documentElement
  doc.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)
}

window.addEventListener('resize', appHeight)
appHeight()

export default createGlobalStyle`

    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    html, body {
        height:100vh
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
         }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body{
        height: 100vh;
        height: calc(var(--vh, 1vh) * 100 );
        background-color: ${(props) => props.theme.palette.background.default};
    }
    .root{
        height:100%;
        width:100%;
    }

    .MuiSvgIcon-root {
        font-size: 1.5rem !important;
    }
`
