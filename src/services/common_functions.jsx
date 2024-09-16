//This function generates Text from camelCase or any other case
//Eg. Input: "engineBlock", Output: "Engine Block"

export const makeString = (str, keyToExpectedValueMap) => {
  if (str in keyToExpectedValueMap) {
    return keyToExpectedValueMap[str];
  }

  let parts = str.split('_');
  if (parts.length === 2) {
    let leftPart = parts[0].toUpperCase();
    let rightPart = parts[1]
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (char) => char.toUpperCase())
      .trim();

    // Replace 'and' with '&' in the right part
    rightPart = rightPart.replace(/\b[Aa]nd\b/g, '&');
    return `${leftPart} ${rightPart}`;
  }
  let newStr = str.replace(/([A-Z])/g, ' $1').replace(/^./, (char) => char.toUpperCase()).trim();
  newStr = newStr.replace(/\b[Aa]nd\b/g, '&');
  return newStr;
};
