const removeItemAtIndex = (list, index) => {
  const slicedList = [...list.slice(0,index), ...list.slice(-2)]
  return slicedList;
};

console.log(removeItemAtIndex(["a", "b", "c", "d"], 1));
