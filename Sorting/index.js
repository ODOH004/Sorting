function insertionSort(arr) {
    // Iterate over the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
  
      // Move elements of arr[0..i-1] that are greater than key
      // to one position ahead of their current position
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = key;
    }
    return arr;
  }
  
  // Example usage
  let arr = [12, 11, 13, 5, 6];
  console.log("Original array:", arr);
  arr = insertionSort(arr);
  console.log("Sorted array:", arr);
  