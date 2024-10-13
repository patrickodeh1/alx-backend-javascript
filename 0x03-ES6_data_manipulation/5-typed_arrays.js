export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const intArray = new Int8Array(buffer);
  if (value < -128 || value > 127) {
    throw new RangeError('Position outside range');
  }
  intArray[position] = value;
  return buffer;
}
