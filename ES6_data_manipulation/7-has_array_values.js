export default function hasValuesFromArray(set, array) {
  let res = true;
  array.forEach((x) => {
    res = res && set.has(x);
  });
  return (res);
}
