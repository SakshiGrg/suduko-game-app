import styled, { css } from 'styled-components'

export const SuccessMessage = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.green};
    font-size: 18px;
    margin-top: 20px;
    text-align: center;
  `}
`
