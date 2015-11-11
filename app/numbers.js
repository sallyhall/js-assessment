exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    var answer =  parseInt((num >>>0).toString(2).split("").reverse()[bit-1]);
    return answer;
  },

  base10: function(str) {
    return parseInt(str,2);
  },

  convertToBinary: function(num) {
    var answer =  (num >>>0).toString(2);
    if (answer.length<8){
      for(var i=0;i<8-answer.length;i++){
        answer = '0'+answer;
      }
    }
    return answer;
  },

  multiply: function(a, b) {
    return ((a*10)*(b*10))/100;
  }
};
