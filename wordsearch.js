const wordSearch = (letters, word) => { 
    // if word is empty
    if(!word) {
        return false;
    }
    const reversedWord = word.split('').reverse().join('');
    // creating an array of strings from the rows
    const horizontalJoin = letters.map(ls => ls.join(''))
    // looping through the strings
    for (l of horizontalJoin) {
        if (l.includes(word) || l.includes(reversedWord)) return true
    }

    // creating a new matrix with our transpose function
    const newLettersMatrix = transpose(letters);
    // creating a array of strings from the rows (new rows, previously columns)
    const verticalJoin = newLettersMatrix.map(ls => ls.join(''));
    // loop through the strings
    for (l of verticalJoin) {
        if (l.includes(word) || l.includes(reversedWord)) return true;
    }

    return false;


};

// there-is-no-spoon.js
const transpose = function (matrix) {
  const columnCount = matrix.length;
  const rowCount = matrix[0].length;
  const newMatrix = [];

  for(let row = 0; row < rowCount; row++) {
      newMatrix[row] = [];
      for (let column = 0; column < columnCount; column++) {
          newMatrix[row].push(matrix[column][row]);
      }
  }

  return newMatrix;

};

module.exports = wordSearch