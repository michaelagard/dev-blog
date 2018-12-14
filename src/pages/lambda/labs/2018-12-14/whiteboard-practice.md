---
title: Lambda Week 5 Whiteboard Practice - Robot Paths
date: "2018-12-14"
---

## Whiteboard Practice

Lambda assigned me a partner to accomplish a whiteboard interview with another student.

>Robot Paths

>Let's say a robot is located at the top-left corner of an n x n grid. The robot can move either up, down, left, or right, one space at a time. It also cannot visit the same spot twice. The robot is trying to reach the bottom-right corner of the grid.

>Write a function to count the number of ways that the robot can reach the bottom-right corner of the grid. Your function should receive n (the size of the grid) as a parameter.

>A board can be generated using this function:

```
function makeBoard(n) {
  let board = [];
  for (let i = 0; i < n; i++) {
    board.push([]);
    for (let j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.toggle = (i, j) => {
    board[i][j] = !board[i][j];
  };
  board.hasBeenVisited = (i, j) => {
    return board[i][j];
  };
  return board;
}
```
GitHub repo for my assigned problem.
[Here](https://github.com/LambdaSchool/Whiteboard-Pairing/tree/master/RobotPaths) 

My demonstration video: https://youtu.be/Gs9ZXQIsmK4