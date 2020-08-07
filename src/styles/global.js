import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
        font-family: 'Poppins', sans-serif;
    }

    body{
        height: 100%;
        background-color: #fff;
    }

    input, button, textarea{
        outline: none;
        border: none;
    }

    ::-webkit-scrollbar {
        height: 12px;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        -webkit-border-radius: 10px;
        border-radius: 4px;
        background: rgba( 255, 255, 255, .4); 
    }

    ::-webkit-scrollbar-track-piece{
        margin: 1%;
    }
`