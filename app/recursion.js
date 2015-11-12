exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var files = [];
    var findDir = function (data, dirName) {
        if(data.dir===dirName){
          addName(data);
        }
        else{
          findDir(data.files[1],dirName);
        }
    };
    var addName = function(data){
      _.each(data.files, function (file) {
        if(typeof file === "string"){
          files.push(file);
        }
        else{
          files.concat(addName(file));
        }
    });
  };
  if(dirName){
    findDir(data,dirName);
  }
  else{
    addName(data);
  }
    return files;
  },

  permute: function(arr) {
    var answers = [];
    if (arr.length===1){
      answers = arr;
    }
    else{
      _.each(arr, function(el,idx,array){
        //create a copy of the array
        newArray = array.slice();
        //remove this element from that array
        newArray.splice(idx,1);
        //call permute on the new array without the element
        retAnswers = recursionAnswers.permute(newArray);
        //for each of the items in the returned array
        _.each(retAnswers, function(retArr){
          //concatenate this element to each returned array;
          //put the concatenated array into the answers array;
          answers.push([el].concat(retArr));
        });
      });

    }
    return answers;
  },

  fibonacci: function(n) {
    if (n===2 ||n===1){
      return 1;
    }
    else {
      return recursionAnswers.fibonacci(n-1) + recursionAnswers.fibonacci(n-2);
    }
  },

  validParentheses: function(n) {
    var answer=[];
    if(n===1){
      answer = ["()"];
    }
    else{
      retAnswer = recursionAnswers.validParentheses(n-1);
      _.each(retAnswer, function (el) {
        answer.push("()"+el);
        if(("()"+el)!==(el+"()")){
          answer.push(el+"()");
        };
        answer.push("("+el+")");
      });
    }
    return answer;
  }
};
