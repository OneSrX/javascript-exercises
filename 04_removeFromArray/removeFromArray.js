const removeFromArray = function (arr, ...args) {
  let itemIsValid;
  let newArr = [];

  for (let item of arr) {
    itemIsValid = true;
    for (let i = 0; i < args.length; i++) {
      if (item === args[i]) {
        itemIsValid = false;
        break;
      }
    }
    if (itemIsValid) {
      newArr.push(item);
    }
  }
  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
