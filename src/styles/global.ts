import { createGlobalStyle } from 'styled-components';

import githubBackgroundSVG from '../assets/github_background.svg';

const GlobalStyles = createGlobalStyle`
    * {
        margin:0px;
        padding:0px;
        outline:0;
        box-sizing:border-box;
    }

    body {
        background:#F2F2FA url(${githubBackgroundSVG}) no-repeat 70% top;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font:16px Roboto, sans-serif;
    }

    #root {
        max-width:960px;
        margin:0px auto;
        padding: 40px 20px;
    }

    button {
        cursor:pointer;
    }
`;

export default GlobalStyles;