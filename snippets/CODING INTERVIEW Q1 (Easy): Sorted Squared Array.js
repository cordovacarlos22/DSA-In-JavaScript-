

//! best performance 
function sortedSquarredArray(array) {

  //?  this solution uses two-pointer technique

  // creates a new array with array from parameters length and fill it with 0
  let newArray = new Array(array.length).fill(0);

  let pointerLeft = 0; // left pointer  node
  let pointerRight = array.length - 1; // right pointer  node

  // loop over array
  // let is equal to the last element in the array = array.lenght-1
  // LOOP runs until i >= 0
  // i -- access the next element in the array 
  for (let i = array.length - 1; i >= 0; i--){
    // we need to squared left and right 
    let leftSquare = Math.pow(array[pointerLeft], 2);
    let rightSquare = Math.pow(array[pointerRight], 2);

    if (leftSquare > rightSquare) {
      newArray[i] = leftSquare
      leftSquare ++
    } else {
      newArray[i] = rightSquare
      rightSquare--
    };
  }; 

  return newArray;
};

 //! brutal  
// function sortedSquarredArray(array) {
//   //write code here.make sure to return desired array 

//   // 2.then after loop and squared nums are done, we are going to need a way to stotere data.
//   // 3.we could save them on a auxiliary array to then be sorted.
//   let result = []

//   // TODO: return  a new array with numbers  squared and sorted in a ASC ORDER.
//   //1. to create this algorithm we have to loop over each element on the array and multiplie it by its own. (3 * 3 = 9)
//   for (let i = 0; i < array.length; i++) {
//     result.push(array[i] * array[i]);
//   };
//   // 4. find a way to sort number in ASC order. NOT SURE YET HOW TO IMPLEMENT THIS.
//   // 5 .return result
//   return result.sort((a, b) => a - b); // return result array and uses sort method to sort number in ASC ORDER

//   // code is O(N) => because it grow is a linear way (depenting on the length of N).

// };


