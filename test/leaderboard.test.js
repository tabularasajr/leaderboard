import { test } from "node:test";
import assert from "node:assert/strict";
import { addScore, topScores } from "../src/leaderboard.js";

test("lists the best scores first", () => {
  const board = [];
  addScore(board, "ana", 42);
  addScore(board, "bo", 17);
  addScore(board, "cy", 88);
  assert.deepEqual(topScores(board), [88, 42, 17]);
});

test("keeps only the top n", () => {
  const board = [];
  for (const s of [10, 20, 30, 40, 50, 60]) addScore(board, "p", s);
  assert.deepEqual(topScores(board, 3), [60, 50, 40]);
});
