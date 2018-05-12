/**
 * @param {character[][]} board
 * @return {boolean}
 */
/**
 * @rows rows[2][5] = 1 表示第三行5出现了一次
 * @cols cols[1][5] = 1 表示第二列5出现了一次
 * @boxs boxs[3][2] = 1 表示第4个3*3九宫格中2出现了一次（从左到右 从上到下 依次为0-8）
 */
let isValidSudoku = function (board) {
  let rows = new Array(9), cols = new Array(9), boxs = new Array(9)
  for(let p = 0; p < 9; p++) {
    rows[p] = new Array(9)
    cols[p] = new Array(9)
    boxs[p] = new Array(9)
  }
  let len = board.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] !== '.') {
        let num = parseInt(board[i][j]) - 1
        let k = parseInt(i / 3) * 3 + parseInt(j / 3)
        if (rows[i][num] === 1 || cols[j][num] === 1 || boxs[k][num] === 1) {
          return false
        }
        rows[i][num] = cols[j][num] = boxs[k][num] = 1
      }
    }
  }
  return true
}
console.log(isValidSudoku([
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]))