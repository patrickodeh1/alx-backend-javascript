export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  if (position < 0 || position > length) {
    throw new RangeError('Position outside range');
  }
  view.setInt8(position, value);
  return view;
}
