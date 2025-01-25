// Words for the crossword puzzle
const words = ["HTML", "CSS", "JAVASCRIPT", "CROSSWORD", "PUZZLE", "CODE"];

// Grid dimensions
const gridSize = 10;

// Generate crossword puzzle
function generatePuzzle() {
  const puzzleContainer = document.getElementById("puzzle-container");
  puzzleContainer.innerHTML = ""; // Clear previous puzzle

  // Create an empty grid
  const grid = Array.from({ length: gridSize }, () =>
    Array(gridSize).fill("")
  );

  // Place words in the grid
  words.forEach((word) => {
    const direction = Math.random() > 0.5 ? "horizontal" : "vertical";
    const startRow = Math.floor(Math.random() * gridSize);
    const startCol = Math.floor(Math.random() * gridSize);

    if (direction === "horizontal" && startCol + word.length <= gridSize) {
      for (let i = 0; i < word.length; i++) {
        grid[startRow][startCol + i] = word[i];
      }
    } else if (direction === "vertical" && startRow + word.length <= gridSize) {
      for (let i = 0; i < word.length; i++) {
        grid[startRow + i][startCol] = word[i];
      }
    }
  });

  // Render the grid
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.textContent = grid[row][col];
      if (grid[row][col] === "") {
        cell.classList.add("empty");
      }
      puzzleContainer.appendChild(cell);
    }
  }
}

// Attach event listener to the button
document.getElementById("generate-btn").addEventListener("click", generatePuzzle);

// Generate an initial puzzle on page load
generatePuzzle();
