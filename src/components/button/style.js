import styled from "styled-components";

export const StyledButton = styled.button`

    background-color: var(--purple-blue);
    padding: 12px 24px;
    border: none;
    border-radius: 10px;
    filter: drop-shadow(6px 4px 4px rgba(0, 0, 0, 0.25));
    color: var(--white);
    margin: 10px;
    &:hover{
        font-weight: bold;
        background-color: #191970;
        transition: 0.6s;
    }


`