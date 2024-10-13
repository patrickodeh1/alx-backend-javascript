export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const intArray = new Int8Array(buffer);
  if (position < 0 || position > length) {
    throw new RangeError('Position outside range');
  }
  intArray[position] = value;
  return buffer;
}
