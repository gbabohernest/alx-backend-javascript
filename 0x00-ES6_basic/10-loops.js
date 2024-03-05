export default function appendToEachArrayValue(array, appendString) {
  const resultArray = [];
  for (const value of array) {
    // array[index] = `${appendString + value}`;
    resultArray.push(`${appendString + value}`);
  }
  return resultArray;
}
