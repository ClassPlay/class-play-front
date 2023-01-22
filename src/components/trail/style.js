import styled from 'styled-components';

export const StyledTrail = styled.div`
  border-radius: 13px;
  filter: drop-shadow(6px 4px 4px rgba(0, 0, 0, 0.25));
  background-color: var(--white);
  width: 40vw;
  height: 40vw;
  margin: 10px;

  img {
    width: 100%;
    border-radius: 10px 10px 0px 0px;
  }

  h3 {
    text-align: center;
    font-size: 6vw;
    margin-top: 5px;
  }
`;
