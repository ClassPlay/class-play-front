import styled from "styled-components";

export const StyledPageVideo = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;

    h2{
        color: var(--white);
        font-weight: bold;
        text-align: center;
        margin-top: 2rem;
    }

    iframe{
        min-width: 70vw;
        min-height: 40vw;
        margin-top: 2rem;
        border-radius: 13px;
        filter: drop-shadow(6px 4px 4px rgba(0, 0, 0, 0.25));
        background-color: var(--white);
    }


`