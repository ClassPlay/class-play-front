import styled from "styled-components";

export const StyledLogin = styled.div`

    height: 100vh;
    width: 100vw;
    background-color: var(--purple-blue);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img{
        width: 80%;
        margin-bottom: 3rem;
        animation: float 5s ease-in-out infinite;
    }

    h1{
        font-weight: bold;
        font-size: 1.5rem;
    }

    form{
        margin-top: 2rem;
    }

    .login-section{
        background-color: var(--red);
        border-radius: 14px;
        padding: 20px;
        margin: 20px;
    }

    input{
        background-color: var(--white);
        border-radius: 30px;
        border: none;
        margin-bottom: 10px;
        width: 100%;
        padding: 8px;
    }

    .div-login{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-top: 2rem;
    }

    .btn-login{
        background-color: var(--white);
        color: var(--purple-blue);
        padding: 10px 15px;
        font-weight: bold;
        border-radius: 10px;
        text-align: center;
        &:hover{
            background-color: var(--purple-blue);
            color: var(--white);
            transition: 0.4s;
        }
    }

    @keyframes float{
        0%{
            transform: translatey(0px);
        }
        50%{
            transform: translatey(15px);
        }
        100%{
            transform: translatey(0px);
        }
    }

`