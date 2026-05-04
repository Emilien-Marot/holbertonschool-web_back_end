export default function getListStudentIds(arrayStudent) {
  if (!Array.isArray(arrayStudent)) {
    return ([]);
  }
  const mapped = arrayStudent.map((x) => x.id);
  return (mapped);
}
