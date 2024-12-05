/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    
    const sortedArray = nums.sort((a,b)=> a-b);
    const uniqueSortedArray= [... new Set(sortedArray)];
    return uniqueSortedArray[uniqueSortedArray.length-2];
    
}