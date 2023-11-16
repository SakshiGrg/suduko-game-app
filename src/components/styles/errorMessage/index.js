import styled, { css } from 'styled-components'

export const ErrorMessage = styled.p`
  ${({ theme }) => css`
    background-color: ${theme.colors.red};
    opacity: 0.8;
    color: ${theme.colors.white};
    border-radius: 10px;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
  `}
`
