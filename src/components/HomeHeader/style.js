import styled from 'styled-components';

export const StyledHomeHeader = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  margin: 30px 30px 0px 30px;

  h1 {
    font-weight: 600;
    font-size: 22px;
    line-height: 26px;
  }

  p {
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    color: var(--white);

    text-align: center;

    margin-top: 10px;
  }
`;
