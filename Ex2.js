function sumArray(arr){
  let result =  arr.reduce((sum, x) => sum + x ,0);
  return result;

}

console.log(sumArray([1, 2, 3, 4, 5, 6]));