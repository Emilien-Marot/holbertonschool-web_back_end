export default function appendToEachArrayValue(array, appendString) {
  const array2 = [];
  for (const val of array) {
    array2.push(appendString + val);
  }

  return array2;
}
