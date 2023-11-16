# Sudoku Puzzle Game

This project is a React-based implementation of the classic Sudoku puzzle game. It allows users to interact with a Sudoku grid, validate their solutions, start new games, and enjoy a modern, responsive UI.

## Description

This is a React-based implementation of the classic Sudoku puzzle game, featuring a user-friendly interface for playing, validating solutions, and starting new games.

## Project Structure

The project follows the create-react-app structure and is organized into several key directories and files:

src/
├── components/
│   ├── styles/
│   │   ├── buttons/
│   │   │   └── index.js
│   │   ├── card/
│   │   │   └── index.js
│   │   ├── content/
│   │   │   └── index.js
│   │   ├── errorMessage/
│   │   │   └── index.js
│   │   ├── successMessage/
│   │   │   └── index.js
│   │   ├── sudokuGrid/
│   │   │   └── index.js
│   │   ├── title/
│   │   │   └── index.js
│   │   └── index.js
│   ├── sudokuGrid/
│   │   ├── index.js
│   │   └── index.test.js
│   └── index.js
├── styles/
│   ├── global.js
│   ├── index.js
│   └── theme.js
├── .prettierrc
├── index.js
└── reportWebVitals.js


## Key Components 

* SudokuGrid: Main component containing the Sudoku game logic and UI.
* Styled Components: Located in src/components/styles/, these components provide custom styles for various UI elements like buttons, cards, and messages.
* Global Styles: Defined in src/styles/global.js for application-wide styling.
* Theme: Contains color and transition definitions in src/styles/theme.js.

## Logical Flow

![Alt text](<Pasted Graphic.png>)

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
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
This will execute the test suite defined in src/components/sudokuGrid/index.test.js.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.





