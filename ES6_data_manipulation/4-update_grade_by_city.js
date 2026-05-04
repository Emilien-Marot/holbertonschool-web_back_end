export default function updateStudentGradeByCity(arrayStudent, city, newGrades = NaN) {
  const newArray = arrayStudent.filter((x) => x.location === city).map((x) => {
    const newX = x;
    const gradeDict = newGrades.find((y) => y.studentId === x.id);
    newX.grade = (gradeDict !== undefined) ? gradeDict.grade : 'N/A';
    return (newX);
  });
  return (newArray);
}
