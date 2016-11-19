//player object
var Player = function (name){
  this.name = name;
  this.arrayOfWords = [];
};

Player.prototype.plays = function(){
  return this.arrayOfWords;
};

Player.prototype.play = function(word){
  this.arrayOfWords += word;

  return false;
};

Player.prototype.totalScore = function(){
  var total = 0;
  for (var item of this.arrayOfWords)
  {
    total += score(item);
  }
  return total;
};

Player.prototype.hasWon = function(){
  if (this.totalScore > 100) { return true; }
  else { return false; }
};

Player.prototype.highestScoringWord = function () {
  return highestScoreFrom(this.arrayOfWords);
};

Player.prototype.highestWordScore = function(){
  return score(this.highestScoringWord);
};
