export default function appendToEachArrayValue(array, appendString) {
  const result = [];
  let idx = 0;
  for (const value of array) {
    result[idx] = appendString + value;
    idx += 1;
  }

  return result;
}
