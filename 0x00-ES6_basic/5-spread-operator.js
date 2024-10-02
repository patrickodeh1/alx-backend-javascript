export default function concatArrays(array1, array2, string) {
  const args = [...array1, ...array2, ...string];
  return args;
}
