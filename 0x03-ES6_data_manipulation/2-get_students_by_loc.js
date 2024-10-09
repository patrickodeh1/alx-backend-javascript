export default function getStudentsByLocation(arr, city) {
  if (Array.isArray(arr) && arr.every((item) => typeof item === 'object'
        && item !== null) && typeof city === 'string') {
    return arr.filter((item) => item.location === city);
  }
  return [];
}
