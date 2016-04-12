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

    for(var i = 0,len = arr.length; i< len;i++){
      if(arr[i] == item){
        arr.splice(i,2);
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
    var new_arr = arr1.concat(arr2);
    return new_arr;
  },

  insert : function(arr, item, index) {
    arr.splice(2,0,item);
    return arr;
  },

  count : function(arr, item) {
    var count = 0;
    for(var i =0; i <arr.length; i++){
      if(arr[i] == item){
        count++
      }
    }
    return count
  },

  duplicates : function(arr) {
    // var duplicates_arr = [];
    // console.log(arr);
    // //var sorted_arr = arr.slice().sort();
    // for(var i =0; i <arr.length -1; i++){
    //   if(arr[i + 1] == arr[i]){
    //     duplicates_arr.push(arr[i]);
    //   }
    // }
    // return duplicates_arr;
  },

  square : function(arr) {
    // console.log(arr);
    // for(var i =0; i < arr.length; i++){
      
    // }
  },

  findAllOccurrences : function(arr, target) {

  }
};
