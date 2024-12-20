export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }

  const res = [];

  for (const item of set) {
    if (typeof item === 'string' && item.startsWith(startString)) {
      res.push(item.slice(startString.length));
    }
  }
  return res.join('-');
}
