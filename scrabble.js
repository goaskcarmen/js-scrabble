var Scrabble = function() {};

// YOUR CODE HERE
const SCORE_CHART = {
  A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1,R: 1, S: 1, T: 1,
  D: 2, G: 2,
  B: 3, C: 3, M: 3, P: 3,
  F: 4, H: 4, V: 4, W: 4, Y: 4,
  K: 5,
  J: 8, X: 8,
  Q: 10, Z: 10
};
var score = function(word){
  var total = 0,
  len = word.length;

  for (var i=0; i<len; i++)
  {
    for (var key in SCORE_CHART)
    {
      if (word[i].toUpperCase() == key)
      {
        total += SCORE_CHART[key];
      }
    }
  }
  return total;
};

var findMax = function(array)
{
  var max = 0;
  for (var num of array)
  {
    if (num > max)
    {
      max = num;
    }
  }
  return max;
};

var findMin = function(array)
{
  var min = array[0];
  for (var i=1; i<array.length; i++)
  {
    if (num < min){ min = num }
    return min;
  }
}

var findAllScoredWords = function (hash, theScore)
{
  var result = [];
  for (var word in hash)
  {
    if (hash[word] == theScore)
    {
      result.push(word);
    }
  }
  return result;
}

var firstWinningWordInList = function (arrayOfWords, potentialWinningWords){
  for (var word of arrayOfWords)
  {
    for (var winningWord of potentialWinningWords)
    {
      if (winningWord == word) { return winningWord; }
    }
  }
}

var highestScoreFrom = function(arrayOfWords){
  var result = "",
  allScores = {},
  allValues = [],
  maxValue = 0,
  winningWords = [],
  allLen = {};

//generate a {word => score} object
  for (var word of arrayOfWords)
  {
    allScores[word] = score(word);
    if (word.length == 7)
    {
      allScores[word] += 50;
    }
    allValues.push(allScores[word]);
  }

//find the max value in all the scores
  maxValue = findMax(allValues);

  winningWords = findAllScoredWords(allScores, maxValue);

  if (winningWords.length == 1){ result = winningWords[0]; }
  else
  {
    for (var item of winningWords)
    {
      allLen[item] = item.length; //generate a {word => length} object
    }
    var sevenLetterWords = findAllScoredWords(allLen, 7);
    if (sevenLetterWords.length == 0)
    {
      //find the first winning word in the original list then return that word
      result = firstWinningWordInList(arrayOfWords, winningWords);
    }
    else if (sevenLetterWords.length == 1){ result = sevenLetterWords[0]; }
    else
    {
      //return the first 7letterword in the arrayOfWords
      result = firstWinningWordInList(arrayOfWords, sevenLetterWords);
    }
  }
  return result;
};

// Scrabble.prototype.helloWorld = function() {
//   return 'hello world!';
// };
//
// module.exports = Scrabble;



///////////////// main ////////////////
//console.log(score("aek"));
console.log(highestScoreFrom(["cat", "dog", "a"]));
