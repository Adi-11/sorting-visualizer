export const BubbleSort = (stateArray: any[]) => {
  let array = stateArray.slice(0),
    toDispatch = [],
    sorted = false,
    round = 0;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < array.length - 1 - round; i++) {
      toDispatch.push([i, i + 1]);
      if (array[i] > array[i + 1]) {
        toDispatch.push([i + 1, i]);
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        sorted = false;
        // toDispatch.push(array.slice(0));
        // toDispatch.push([]);
      }
    }
    // toDispatch.push([true, array.length - 1 - round]);
    round++;
  }
  //   handleDispatch(toDispatch, dispatch, array, speed);
  console.log([...toDispatch]);
  return toDispatch;
};
