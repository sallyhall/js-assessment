exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  //Brandon helped
  reduceString: function(str, amount) {
    letters = str.split("");
    counter = 0;
    for(i=0;i<letters.length;i++){
      if (letters[i]===letters[i+1]){
        counter++;
        if(counter>=amount){
          letters[i]="";
        }
      }
      else{
        counter=0;
      }
    };
    return letters.join("");
  },
  wordWrap: function(str, cols) {
    var words = str.split(" ");
    var returnString = "";
    _.each(words, function(word, idx, arr){
      //last word - just add to string
      if (idx===words.length-1) {
        returnString +=word;
      }
      //word is longer than or equal to column length, add to string with newline
      else if (word.length>=cols){
        returnString += word +"\n";
      }
      //word is shorter than column length, check to see if this word and the next word together are shorter
      //if so, add this word to next word. else, add this word and newline to string
      else{
        newWord = word +" "+words[idx+1];
        if(newWord.length<=cols){
          words[idx+1]=newWord;
        }
        else{
          returnString += word + "\n";
        }
      }
    });
    return returnString;
  },


  reverseString: function(str) {
    return str.split("").reverse().join("");
  }
};
