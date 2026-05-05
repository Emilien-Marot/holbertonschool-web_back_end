export default function updateUniqueItems(map) {
  map.forEach((val, idx) => {
    if (val === 1) {
      map.set(idx, 100);
    }
  });
}
