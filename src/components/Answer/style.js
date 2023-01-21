import styled, { css } from 'styled-components';

export const StyledAnswer = styled.div`
  display: flex;

  align-items: center;

  height: 27px;
  width: 90vw;

  border-radius: 14px;

  padding: 10px;

  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

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
        `;
      case 'wrong':
        return css`
          color: var(--white);
          background-color: var(--red-wrong);
        `;
    }
  }}
`;
