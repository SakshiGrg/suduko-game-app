import styled, { css } from 'styled-components'

export const NewGameButton = styled.button`
  ${({ theme }) => css`
    padding: 10px 20px;
    margin: 10px;
    background-color: ${theme.colors.green};
    color: ${theme.colors.white};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color ${theme.transition} ease;

    &:hover {
      background-color: ${theme.colors.darkGreen};
    }
  `}
`

export const VadidateGame = styled.button`
  ${({ theme }) => css`
    padding: 10px 20px;
    margin: 10px;
    background-color: ${theme.colors.blue};
    color: ${theme.colors.white};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color ${theme.transition} ease;

    &:hover {
      background-color: ${theme.colors.darkBlue};
    }
  `}
`
