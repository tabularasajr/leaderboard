#!/usr/bin/env node
import { addScore, topScores } from "./src/leaderboard.js";

const board = [];
addScore(board, "ana", 85);
addScore(board, "bo", 7);
addScore(board, "cy", 120);
addScore(board, "dee", 99);
addScore(board, "eli", 100);

console.log(`Top scores: ${topScores(board).join(", ")}`);
