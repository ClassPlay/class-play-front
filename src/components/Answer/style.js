import styled, { css } from 'styled-components';

export const StyledAnswer = styled.div`
  display: flex;

  align-items: center;

  width: 90vw;

  border-radius: 14px;

  padding: 10px;

  margin: 8px;

  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  &:hover {
    transition: 0.5s;
    color: var(--white);
    background-color: var(--purple-blue);
  }

  ${(props) => {
    switch (props.status) {
      default:
        return css`
          color: var(--purple-blue);
          background-color: var(--white);
        `;
      case 'right':
        return css`
          color: var(--white);
          background-color: var(--green-right);

          &:hover {
            color: var(--white);
            background-color: var(--green-right);
          }
        `;
      case 'wrong':
        return css`
          color: var(--white);
          background-color: var(--red-wrong);

          &:hover {
            color: var(--white);
            background-color: var(--red-wrong);
          }
        `;
    }
  }}
`;
