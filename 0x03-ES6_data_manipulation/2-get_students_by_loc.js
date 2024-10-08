export default function getStudentsByLocation(arr, city) {
  const students = arr.filter((item) => item.location === city);
  return students;
}
