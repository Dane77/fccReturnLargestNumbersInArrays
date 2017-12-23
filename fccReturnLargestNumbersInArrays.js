function largestOfFour(arr) {
  
 var finArray = [];
  
  for (var i = 0;i < arr.length;i++){
    var x = arr[i][0];
    for(var j = 1;j < arr[i].length;j++){
      if (arr[i][j] > x){
    x = arr[i][j];
      }
        finArray[i] = x;
    }
    
  }
  return finArray;
}
