import styled from 'styled-components';

export const StyledFinal = styled.div`
  display: flex;
  flex-direction: column;

  background-color: var(--yellow);
  width: 100vw;
  height: 100vh;

  div {
    margin-top: 10px;
    justify-content: center;
  }

  p {
    margin: 50px 10px 0px 25px;

    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
  }

  button {
    padding: 9px 53px;
    gap: 10px;
    background: var(--white);
    border-radius: 13px;
    border: none;

    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: var(--purple-blue);

    margin: 20px 30px 0px 30px;

    &:hover {
      transition: 0.5s;
      background-color: var(--purple-blue);
      color: var(--white);
    }
  }
`;
