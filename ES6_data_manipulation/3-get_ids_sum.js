export default function getStudentIdsSum(arrayStudent) {
  const initialValue = 0;
  const mapped = arrayStudent.reduce(
    (accumulator, currentValue) => accumulator + currentValue.id,
    initialValue,
  );
  return (mapped);
}
