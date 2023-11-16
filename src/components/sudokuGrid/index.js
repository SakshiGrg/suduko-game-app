import React, { useState, useEffect } from 'react'
import { GridContainer, GridRow, GridBlock } from '../styles/sudukoGrid'
import { ErrorMessage, SuccessMessage } from '../styles'
import { NewGameButton, VadidateGame } from '../styles/buttons'

const SudokuGrid = () => {
  // Initialize the grid state
  const [initialGrid, setInitialGrid] = useState([])
  const [grid, setGrid] = useState([])
  const [selectedCell, setSelectedCell] = useState(null)
  const [cellError, setCellError] = useState(false)
  const [value, setValue] = useState(null)
  const [puzzleSolved, setPuzzleSolved] = useState(false)
  const emptyCellCount = 10

  useEffect(() => {
    // Creates the Sudoku grid when the component mounts
    generateSudoku()
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedCell && e.key >= '0' && e.key <= '9') {
        const value = parseInt(e.key)
        setValue(value)
        updateCell(selectedCell.row, selectedCell.col, value)
      }
    }

    window.document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [selectedCell, grid])

  // Function to start a new game
  const startNewGame = () => {
    generateSudoku()
    setSelectedCell(null)
    setCellError(false)
    setValue(null)
    setPuzzleSolved(false)
  }

  // Function to validate the entire grid
  const isGridValid = () => {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        const num = grid[row][col]
        // Check if the cell is filled
        if (num === 0) {
          return false
        }
        // Temporarily empty the cell to validate the move
        grid[row][col] = 0
        const isValid = isValidMove(grid, row, col, num)
        // Restore the cell value
        grid[row][col] = num
        // If invalid move, return false
        if (!isValid) {
          return false
        }
      }
    }
    return true
  }

  // Function to check if the puzzle is solved
  const checkPuzzle = () => {
    if (isGridValid()) {
      setPuzzleSolved(true)
    } else {
      setPuzzleSolved(false)
      alert('The puzzle is not solved correctly. Please try again.')
    }
  }

  // Creates a Sudoku grid
  const generateSudoku = () => {
    const newGrid = Array.from({ length: 9 }, () => Array(9).fill(0))
    if (fillGrid(newGrid)) {
      createEmptyCells(newGrid, emptyCellCount)
      setGrid(newGrid)
      setInitialGrid(JSON.parse(JSON.stringify(newGrid)))
    } else {
      console.error('Unable to generate a valid Sudoku grid.')
    }
  }

  const updateCell = (row, col, value) => {
    if (isValidMove(grid, row, col, value)) {
      const newGrid = grid.map((gridRow, rIndex) =>
        gridRow.map((cell, cIndex) =>
          rIndex === row && cIndex === col ? value : cell,
        ),
      )
      setGrid(newGrid)
      setCellError(false)
    } else {
      setCellError(true) // Set error state when an invalid move is made
    }
  }

  // Fill the Sudoku grid using a backtracking algorithm
  const fillGrid = (grid) => {
    return solveSudoku(grid)
  }

  // Solve the Sudoku grid using backtracking
  const solveSudoku = (grid) => {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (grid[row][col] === 0) {
          for (let num = 1; num <= 9; num++) {
            if (isValidMove(grid, row, col, num)) {
              grid[row][col] = num
              if (solveSudoku(grid)) {
                return true
              }
              // If the current move doesn't lead to a valid number, backtrack by resetting the cell to 0
              grid[row][col] = 0
            }
          }
          // If no valid number can be placed in the current cell, backtrack to the previous cell
          return false
        }
      }
    }
    // If all cells are filled successfully, return true to indicate a valid solution
    return true
  }

  // Check if a number is present in the same row
  const isInRow = (grid, row, num) => {
    return grid[row].includes(num)
  }

  // Check if a number is present in the same column
  const isInColumn = (grid, col, num) => {
    for (let row = 0; row < 9; row++) {
      if (grid[row][col] === num) {
        return true
      }
    }
    return false
  }

  // Check if a number is present in the same 3x3 box
  const isInBox = (grid, startRow, startCol, num) => {
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (grid[row + startRow][col + startCol] === num) {
          return true
        }
      }
    }
    return false
  }

  // Check if a number can be placed in a Gridcell/GridBlock by satisfying the Sudoku rules
  const isValidMove = (grid, row, col, num) => {
    return (
      !isInRow(grid, row, num) &&
      !isInColumn(grid, col, num) &&
      !isInBox(grid, row - (row % 3), col - (col % 3), num)
    )
  }

  // Create a specified number of empty cells in the grid
  const createEmptyCells = (grid, count) => {
    for (let i = 0; i < count; i++) {
      const row = Math.floor(Math.random() * 9)
      const col = Math.floor(Math.random() * 9)
      if (grid[row][col] !== 0) {
        grid[row][col] = 0
      } else {
        i-- // Try again if the cell is already empty
      }
    }
  }

  // Render the Sudoku grid
  const renderGrid = () => {
    return grid.map((row, rowIndex) => (
      <GridRow key={rowIndex} data-testid="grid-row-container">
        {row.map((cell, colIndex) => {
          const isOriginallyEmpty = initialGrid[rowIndex][colIndex] === 0
          const isEditable = cell === 0
          const isSelected =
            selectedCell &&
            selectedCell.row === rowIndex &&
            selectedCell.col === colIndex

          console.log('isEditable-->', isEditable)
          return (
            <GridBlock
              key={colIndex}
              className={`block-${rowIndex}-${colIndex}`}
              data-testid={`block-${rowIndex}-${colIndex}`}
              onClick={() =>
                isEditable && setSelectedCell({ row: rowIndex, col: colIndex })
              }
              style={{
                cursor: isEditable ? 'pointer' : 'default',
                color: isSelected && cellError ? 'rgba(0,0,0)' : '',
                fontWeight: isOriginallyEmpty && cell !== 0 ? 'bold' : 'normal',
              }}
            >
              {cell !== 0 ? cell : ''}
            </GridBlock>
          )
        })}
      </GridRow>
    ))
  }

  return (
    <>
      <NewGameButton onClick={startNewGame}>New Game</NewGameButton>
      <GridContainer data-testid="grid-container">{renderGrid()}</GridContainer>
      {cellError ? (
        <ErrorMessage>
          {value} is not the right number,Please choose the correct number to
          solve the puzzle.
        </ErrorMessage>
      ) : (
        ''
      )}
      <VadidateGame onClick={checkPuzzle}>Validate Game</VadidateGame>
      {puzzleSolved && (
        <SuccessMessage>Puzzle Solved and You Won!</SuccessMessage>
      )}
    </>
  )
}

export default SudokuGrid
