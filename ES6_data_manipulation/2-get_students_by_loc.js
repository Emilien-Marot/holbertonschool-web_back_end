export default function getStudentsByLocation(arrayStudent, location) {
  if (!Array.isArray(arrayStudent)) {
    return ([]);
  }
  const mapped = arrayStudent.filter((x) => x.location === location);
  return (mapped);
}
