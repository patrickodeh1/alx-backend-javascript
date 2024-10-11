export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const stGrade = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: stGrade ? stGrade.grade : 'N/A',
      };
    });
}
