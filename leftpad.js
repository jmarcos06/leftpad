function leftpad(str, length, paddingChar = ' ') {
  if (typeof str !== 'string') {
    throw new Error('The input must be a string');
  }

  if (str.length >= length) {
    return str;
  }

  const paddingLength = length - str.length;
  const padding = paddingChar.repeat(paddingLength);

  return padding + str;
}