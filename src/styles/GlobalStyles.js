import { createGlobalStyle } from 'styled-components';
import 'animate.css';

export default createGlobalStyle`
      *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;

        font-family: 'Roboto', sans-serif;
        font-style: normal;
    }

    :root{
        --red: #FF5757;
        --white: #FFFF;
        --purple-blue: #1F1347;
        --yellow: #FFE500;
        --blue: #00A3FF;
        --black: #0000;
        --green-right: #0FBB00;
        --red-wrong:  #B50000;
        --light-grey: #f5f5f5;

    }

    body {
        display: flex;

        justify-content: center;
        align-items: center;

        background-color: var(--red);
        width: 100vw;

    }

    button {
        cursor: pointer;
        transition: 0.5s;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    h1{
        display: flex;

        justify-content: center;
        align-items: center;

        color: var(--white);
        weight: 600;
        font-size: 22px;
    }

    .animate-fade-in-down{
        animation-duration: 3s;
        animation-name: fadeInDown;
    }

    .animate-fade-in-left{
        animation-duration: 2s;
        animation-name: fadeInLeft;
    }
`;
