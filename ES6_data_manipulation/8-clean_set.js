export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString === '') {
    return ('');
  }
  let str = '';
  let separator = '';
  set.forEach((s) => {
    if (s.startsWith(startString)) {
      str = str + separator + s.substr(startString.length);
      separator = '-';
    }
  });
  return (str);
}
