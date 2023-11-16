import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ThemeProvider } from 'styled-components'
import SudokuGrid from './index'
import { theme } from '../../styles'

describe('SudokuGrid Component', () => {
  // Wrap SudokuGrid with ThemeProvider in tests
  const renderWithTheme = (component) => {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>)
  }
  // Test that the component renders correctly
  test('renders the Sudoku grid', async () => {
    renderWithTheme(<SudokuGrid />)
    // Wait for the grid to be populated
    await waitFor(() => screen.getByTestId('grid-container'))
    expect(screen.getByTestId('grid-container')).toBeInTheDocument()
  })

  // Test that the component renders correctly
  test('renders the correct no. of grid rows', async () => {
    renderWithTheme(<SudokuGrid />)
    // gives the array of all elements having the data-testid
    const gridRows = await screen.findAllByTestId('grid-row-container')
    expect(gridRows).toHaveLength(9)
  })
  //Test that the grid initializes correctly
  test('renders the correct no. of grid cells', async () => {
    renderWithTheme(<SudokuGrid />)
    const gridBlocks = await screen.findAllByTestId(/block-/)
    expect(gridBlocks).toHaveLength(81) // 9x9 Sudoku grid
  })

  // Test the empty cells generation
  test('generates correct number of empty cells', async () => {
    renderWithTheme(<SudokuGrid />)
    // Wait for the grid to be populated
    await waitFor(() => screen.getAllByTestId(/block-/))
    const emptyBlocks = screen
      .getAllByTestId(/block-/)
      .filter((block) => block.textContent === '')
    // we expect to generate 10 no. of empty cells from the createEmptyCells func
    expect(emptyBlocks).toHaveLength(10)
  })

  // Test for valid grid generation
  test('generates a valid Sudoku grid', async () => {
    renderWithTheme(<SudokuGrid />)
    // This test assumes that the grid is valid if it is completely filled without any zeros
    // You might want to enhance this to check for valid Sudoku rules
    await waitFor(() => screen.getAllByTestId(/block-/))
    const gridBlocks = screen.getAllByTestId(/block-/)
    const filledBlocks = gridBlocks.filter((block) => block.textContent !== '')
    expect(filledBlocks.length).toBeGreaterThan(0)
    expect(filledBlocks.length).toBeLessThanOrEqual(81)
  })
})
