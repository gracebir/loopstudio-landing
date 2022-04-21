import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box ;
    }

    :root{
        --color-white: hsl(0, 0%, 100%);
        --color-black: hsl(0, 0%, 0%);
        --color-dark-gray: hsl(0,0%, 55%);
        --color-very-dark-gray: hsl(0, 0%, 41%);
    }

    body{
        font-family: 'Alata', sans-serif;
        font-size: 15px;
        font-size: 400;
    }
`