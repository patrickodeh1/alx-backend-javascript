export default function getStudentsByLocation(students, city) {
  if (Array.isArray(students) && students.every((student) => typeof student === 'object'
        && student !== null) && typeof city === 'string') {
    return students.filter((student) => student.location === city);
  }
  return [];
}
