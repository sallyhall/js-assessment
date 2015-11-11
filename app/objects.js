exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects : function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate : function(obj) {
    var answer =  Object.getOwnPropertyNames(obj);
    answer = _.map(answer, function(el){
      return el + ": "+obj[el];
    });
    return answer;
  }
};
