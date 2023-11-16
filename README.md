# Sudoku Puzzle Game

This project is a React-based implementation of the classic Sudoku puzzle game. It allows users to interact with a Sudoku grid, validate their solutions, start new games, and enjoy a modern, responsive UI.

## Description

This is a React-based implementation of the classic Sudoku puzzle game, featuring a user-friendly interface for playing, validating solutions, and starting new games.

## Key Components 

* `SudokuGrid`: Main component containing the Sudoku game logic and UI.
* `Styled Components`: Located in src/components/styles/, these components provide custom styles for various UI elements like buttons, cards, and messages.
* `Global Styles`: Defined in src/styles/global.js for application-wide styling.
* `Theme`: Contains color and transition definitions in src/styles/theme.js.

## Logical Flow

<img width="462" alt="Pasted Graphic" src="https://github.com/SakshiGrg/suduko-game-app/assets/52864853/4006c9ca-ccc1-45c7-a0f5-02dece219ee5">


The application follows a straightforward logical flow:

1. Start: The entry point of the flow.
2. Start Game: When the application starts, the SudokuGrid component initializes a new Sudoku puzzle.
3. User Inputs: The user interacts with the grid, inputting numbers into empty cells with Key pressing. 
  * When the user inputs the right number, the input is filled in the empty cell with bold styling
  * When the user inputs the incorrect input number, the error Message is visible, indicating the {enterted numver} is not the correct number,Please choose the correct number to solve the puzzle.
4. Validate Game: The user can validate their solution at any time using the 'Validate Game' button, to check if the filled numbers are satisfying the suduko rules or not.
5. Correct: A decision point checking if the solution is correct.
  * Yes: If the solution is correct, the flow moves to success message 'Puzzle Solved and you won!'.
  * No: If the solution is incorrect, the flow moves to error message 'Puzzle is not solved correctly. Please try again!'.
6. New Game: Users can start a new game using the 'New Game' button.
7. End Game:  The termination point of the flow.


## Getting Started

### Prerequisites
Ensure you have the following installed:

* Node.js (v12 or higher)
* npm 


### Installation

1. Clone the repository:
git clone https://github.com/your-username/your-repo-name.git

2. Navigate to the project directory::
cd your-repo-name

3. Install dependencies:
npm install

### Running the Application
To start the application in development mode:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\


### Localhost Screenshots with respect to the functional flow 

<img width="1423" alt="image" src="https://github.com/SakshiGrg/suduko-game-app/assets/52864853/367102ee-5cc1-4ff7-be06-40710d2fb24d">
<img width="363" alt="image" src="https://github.com/SakshiGrg/suduko-game-app/assets/52864853/b4f230e0-6bfd-4e7a-af64-ef02017becb3">
<img width="1406" alt="image" src="https://github.com/SakshiGrg/suduko-game-app/assets/52864853/13cf693d-99cf-493c-907c-5d9b123f95f5">
<img width="812" alt="image" src="https://github.com/SakshiGrg/suduko-game-app/assets/52864853/329c193a-dcd4-4ce6-b86e-7931b101e746">
<img width="365" alt="image" src="https://github.com/SakshiGrg/suduko-game-app/assets/52864853/d8b97ed1-3bbf-404c-a5bf-82c815f488f2">




### `npm test`

Launches the test runner in the interactive watch mode.
This will execute the test suite defined in src/components/sudokuGrid/index.test.js.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!





