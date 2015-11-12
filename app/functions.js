exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(this,arr);

  },

  speak : function(fn, obj) {
    return fn.apply(obj);
  },

  functionFunction : function(str) {
    return function(words){
      return str+", "+words;
    }
  },

  makeClosures : function(arr, fn) {
    return _.map(arr, function (el) {
      return function(){
        return fn(el);
      };
    });
  },

  partial : function(fn, str1, str2) {
    return function(str3){
      return fn(str1,str2,str3);
    };
  },

  useArguments : function() {
    return _.reduce(arguments, function (memo, num) {
      return memo+num;
    },0);
  },

  callIt : function(fn) {
    var args = Array.prototype.slice.call(arguments);
    var fn = args.shift();
    return fn.apply(this,args);
  },

  partialUsingArguments : function(fn) {
    var theseArgs = Array.prototype.slice.call(arguments);
    theseArgs.shift();
    return function(){
      var args = Array.prototype.slice.call(arguments);
      return fn.apply(this,theseArgs.concat(args));
    };
  },

//I know this only handles the case for three variables, but that is all i could do for now.
  curryIt : function(fn) {
      var funcToReturn =  function(var1){
        return function(var2){
          return function(var3){
            return fn(var1,var2,var3);
          }
        }
      }
      return funcToReturn;
    },
  


};
