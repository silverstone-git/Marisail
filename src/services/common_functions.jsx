//This function generates Text from camelCase or any other case
//Eg. Input: "engineBlock", Output: "Engine Block"

export const makeString = (str, keyToExpectedValueMap) => {
  var newStr = "";
  if (str in keyToExpectedValueMap) {
    newStr = keyToExpectedValueMap[str];
  } else {
    newStr += str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
      if (str[i] === str[i].toUpperCase() || i === 0) {
        newStr += " " + str[i];
      } else {
        newStr += str[i];
      }
    }
  }
  return newStr;
};
