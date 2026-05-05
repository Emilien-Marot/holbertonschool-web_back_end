export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw 'Position outside range';
  }
  const buffer = new ArrayBuffer(length);
  const newArray = new Uint8Array(buffer);
  newArray[position] = value;
  return (buffer);
}
