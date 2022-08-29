function validSolution(board){
  let valid = true;
  
  function check(arr) {
    const validator = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let hasAll = true;
    validator.forEach(a => {
      hasAll = hasAll && arr.some(b => b === a);
    });
    return hasAll;
  }

  function generateBlocks(blocksArr, i) {
    
    // generate block row 1
    let br1 = [];
    for (let j = 0; j <= 2; j++) {
      br1.push(board[i][j]);
    }
    generateBlocks.block1.push(...br1);

    // generate block row 2
    let br2 = [];
    for (let j = 3; j <= 5; j++) {
      br2.push(board[i][j]);
    }
    generateBlocks.block2.push(...br2);

    // generate block row 3
    let br3 = [];
    for (let j = 6; j <= 8; j++) {
      br3.push(board[i][j]);
    }
    generateBlocks.block3.push(...br3);

    if (i === 2 || i === 5 || i === 8) {
      blocksArr.push(generateBlocks.block1);
      generateBlocks.block1 = [];

      blocksArr.push(generateBlocks.block2);
      generateBlocks.block2 = [];

      blocksArr.push(generateBlocks.block3);
      generateBlocks.block3 = [];
    }
  }

  // block cache
  generateBlocks.block1 = [];
  generateBlocks.block2 = [];
  generateBlocks.block3 = [];
  
  // check rows
  for (let row of board) {
    valid = valid && check(row);
  }
  
  // check columns
  let cols = [];
  for (let row of board) {
    for (let j = 0; j < row.length; j++) {
      if (!cols[j]) {
        cols[j] = [row[j]];
      } else {
        cols[j].push(row[j]);
      }
    }
  }
  
  for (let col of cols) {
    valid = valid && check(col);
  }

  // check 3 x 3 blocks
  let blocks = [];
  for (let i = 0; i < board.length; i++) {
    generateBlocks(blocks, i);
  }
  
  for (let block of blocks) {
    valid = valid && check(block);
  }
  
  return valid;
}

let testTrue = validSolution(
  [
    [5, 3, 4, 6, 7, 8, 9, 1, 2], 
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ]);

let testFalse = validSolution(
  [
    [5, 3, 4, 6, 7, 8, 9, 1, 2], 
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]
  ]);

console.log('expected: true',`received: ${testTrue}`);
console.log('expected: false',`received: ${testFalse}`);