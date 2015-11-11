exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    var total = 0;
    arr.forEach(function (el, idx, arr) {
      total += el;
    });
    return total;
  },

  remove : function(arr, item) {
    return _.reject(arr,function (el) {
      return el === item;
    })
  },

  removeWithoutCopy : function(arr, item) {
    var length = arr.length;
    for(var i=0;i<length;i++){
        if(arr[i]===item){
          arr.splice(i,1);
          i--;
          length--;
        }
      }
    return arr;
  },

  append : function(arr, item) {
     arr.push(item);
     return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index,0,item);
    return arr;
  },

  count : function(arr, item) {
    var counts = _.countBy(arr, function(el){return el;});
    return counts[item];
  },

  duplicates : function(arr) {
    return _(arr).chain()
    .countBy(function(el){return el;})
    .pairs()
    .filter(function(el){return el[1]>1;})
    .map(function(el){return parseInt(el[0]);})
    .value();
  },

  square : function(arr) {
    return _.map(arr, function(el){return el*el;});
  },

  findAllOccurrences : function(arr, target) {
    var locations = [];
    _.each(arr, function(el,idx,array){
      if(el===target){
        locations.push(idx);
      }
    });
    return locations;
  }
};
