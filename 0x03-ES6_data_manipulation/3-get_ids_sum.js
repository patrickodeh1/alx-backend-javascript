function totSum(total, id) {
  return total + id;
}

export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    const ids = students.map((student) => student.id);
    return ids.reduce(totSum);
  }
  return [];
}
