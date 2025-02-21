import { defineStore } from "pinia";

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // Righe
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // Colonne
  [0, 4, 8],
  [2, 4, 6], // Diagonali
];

export const useGridStore = defineStore("gridStore", {
  state: () => ({
    grid: Array(9).fill(""),
    currentPlayer: "X",
    scores: { X: 0, O: 0, draw: 0 },
    winner: null as "X" | "O" | "draw"|null,
    gameOver: false,
  }),
  actions: {
    toggleCell(index: number) {
      if (!this.grid[index]) {
        this.grid[index] = this.currentPlayer;

        const winner = this.checkWinner();
        if (winner === "X" || winner === "O") {
          this.winner = winner;
          this.scores[winner as "X" | "O" | "draw"]++;
          this.gameOver = true;
        } else if (this.grid.every((cell) => cell !== "")) {
          this.winner = "draw";
          this.scores.draw++;

          this.gameOver = true;
        } else {
          this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
        }
      }
    },

    checkWinner() {
      for (const [a, b, c] of winningCombinations) {
        if (
          this.grid[a] &&
          this.grid[a] === this.grid[b] &&
          this.grid[b] === this.grid[c]
        ) {
          return this.grid[a];
        }
      }
      return null;
    },
    resetScore() {
      this.scores = { X: 0, O: 0, draw: 0 };
    },

    resetGame() {
      this.grid = Array(9).fill("");
      this.currentPlayer = "X";
      this.winner = null;
      this.gameOver = false;
    },
  },
});
