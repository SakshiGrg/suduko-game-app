import styled, { css } from 'styled-components'

export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`

export const GridRow = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row;

    &:nth-child(1) {
      div {
        border-top: solid 4px ${theme.colors.black};
      }
    }

    &:nth-child(4),
    &:nth-child(7) {
      div {
        border-top: solid 3px ${theme.colors.black};
      }
    }
    &:nth-child(9) {
      div {
        border-bottom: solid 4px ${theme.colors.black};
      }
    }

    div {
      &:nth-child(1) {
        border-left: 4px solid black;
      }
      &:nth-child(4),
      &:nth-child(7) {
        border-left: 3px solid black;
      }
      &:nth-child(9) {
        border-right: 4px solid black;
      }
    }
  `}
`
export const GridBlock = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    align-items: center;
    justify-content: center;
    border: solid 1px ${theme.colors.black};
    cursor: pointer;
    display: flex;
    flex: 1;
    font-size: 1rem;
    height: auto;
    transition: ${theme.transition};
    user-select: none;

    &:before {
      padding-top: 100%;
      content: '';
      float: left;
    }

    &:hover {
      background-color: ${theme.colors.lightBlue};
    }

    &.selected.valid {
      /* font-weight: bold; */
    }

    &.isEditable {
    }
  `}
`
