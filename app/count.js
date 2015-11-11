exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var countTimeout;
    countIt = function(){
      console.log(start++);
      if (start<=end){
        countTimeout = setTimeout(countIt,100);
      }
    }
    countIt();
    return {
      cancel: function(){
        clearTimeout(countTimeout);
      }
    };
  }
};
