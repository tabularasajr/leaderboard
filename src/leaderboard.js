// Scores for the arcade cabinet's high-score table.

export function addScore(board, name, score) {
  board.push({ name, score });
  return board;
}

// The best scores first.
export function topScores(board, n = 5) {
  const scores = board.map((entry) => entry.score);
  return scores.sort().reverse().slice(0, n);
}
