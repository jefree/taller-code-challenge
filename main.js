/* Non-Constructible Change */
function findMinNonChange(coins) {
  const sortedCoins = coins.sort();

  let min = 0;

  sortedCoins.forEach((coin) => {
    if (min + 1 < coin) {
      return false;
    }

    min = min + coin;
  });

  return min + 1;
}

const sample1 = [5, 7, 1, 1, 2, 3, 22];
const sample2 = [1, 1, 1, 1, 1];

console.log(findMinNonChange(sample1));
console.log(findMinNonChange(sample2));

/* Sorted Squared Array*/

function sortedSquares(numbers) {
  const squares = numbers.map((n) => n * n);

  return squares.sort((a, b) => a - b);
}

const numbers1 = [-2, -1];
const numbers2 = [-2, 4, 5, -1];

console.log(sortedSquares(numbers1));
console.log(sortedSquares(numbers2));
