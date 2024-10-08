export default function getListStudentIds(arr) {
  if (Array.isArray(arr) && arr.every((item) => typeof item === 'object'
        && item !== null)) {
    const ids = arr.map((item) => item.id);
    return ids;
  }
  return [];
}
