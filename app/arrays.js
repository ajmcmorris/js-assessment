exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for(var i =0, len = arr.length; i< len;i++){
      if(arr[i] == item){
        return i;
      }
    }
    return -1;
  },

  sum : function(arr) {
    var sum = 0;
    for(var i =0, len = arr.length; i< len;i++){
      sum += arr.pop(i);
    }
    return sum;
  },

  remove : function(arr, item) {
    for(var i = 0; i< arr.length;i++){
      if(arr[i] == item){
        arr.splice(i,1);
      }  
    }
    return arr;
  },

  removeWithoutCopy : function(arr, item) {
    var arr_cp = [];

    console.log(arr);
    for(var i = 0,len = arr.length; i< len;i++){
      if(arr[i] == item){
        arr.splice(i,2);
      }  
    }
    console.log(arr);
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
    var new_arr = arr1.concat(arr2);
    return new_arr;
  },

  insert : function(arr, item, index) {

  },

  count : function(arr, item) {

  },

  duplicates : function(arr) {

  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
