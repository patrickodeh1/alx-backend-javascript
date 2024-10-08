export default function getStudentsByLocation(arr, city) {
  if (Array.isArray(arr) && arr.every((item) => typeof item === 'object'
        && item !== null) && typeof city === 'string') {
    const students = arr.filter((item) => item.location === city);
    return students;
  }
  throw new TypeError('Enter the correct data');
}
