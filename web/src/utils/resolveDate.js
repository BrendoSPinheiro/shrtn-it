export default function resolveDate(string, separator) {
  const split = string.split(separator);

  const slicer = split.slice(0, 4);

  console.log(slicer);
}
