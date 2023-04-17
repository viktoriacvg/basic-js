const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  if(arr.length === 0 ) return [];

  if(!(Array.isArray(arr))) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }

  let methods = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  let indexOfTargetMethod; // это индекс метода в исходном массиве
  let targetMethod;
  let arrOfResult = arr;
  
  function discardNext(array) {
      if (indexOfTargetMethod === (arr.length -1)) {
        array.splice((arr.length -1), 1);
        return array;
      }
      let nextIndex = indexOfTargetMethod+1;
      array.splice(nextIndex, 1);
      array.splice(indexOfTargetMethod, 1);
      
      return array;
  }
  
  function discardPrev(array) {
      if (indexOfTargetMethod === 0) {
        array.splice(indexOfTargetMethod, 1);
        return array;
      }
    let prevIndex = indexOfTargetMethod-1;
      array.splice(prevIndex, 1);
      array.splice(indexOfTargetMethod-1, 1);
      return array;
  }
  
  function doubleNext(array) {
      if (indexOfTargetMethod === (arr.length -1)) {
        array.splice((arr.length -1), 1);
        return array;
      }
    let nextIndex = indexOfTargetMethod+1;
    array.splice(nextIndex+1, 0, array[nextIndex]);
      array.splice(indexOfTargetMethod, 1);
      return array;
  }
  
  function doublePrev(array) {
      if (indexOfTargetMethod === 0){
        array.splice(indexOfTargetMethod, 1);
        return array;
      }
    let prevIndex = indexOfTargetMethod-1;
    array.splice(prevIndex-1, 0, array[prevIndex]);
      array.splice(indexOfTargetMethod-1, 1);
      return array;
  }
  
  targetMethod = arrOfResult.find( function(item, index) {
    if (typeof item === 'string') {
      return item;
    }
  });
  
  indexOfTargetMethod = arrOfResult.findIndex( function(item, index) {
    return item == targetMethod;
  });
  
  switch (targetMethod) {
    case methods[0]:
      discardNext(arrOfResult);
      break;
    case methods[1]:
      discardPrev(arrOfResult);
      break;
    case methods[2]:
      doubleNext(arrOfResult);
      break;
  case methods[3]:
          doublePrev(arrOfResult);
          break;

  }

  console.log(targetMethod);
  console.log(indexOfTargetMethod);
  console.log(arr);
 console.log(arrOfResult);

}

module.exports = {
  transform
};
