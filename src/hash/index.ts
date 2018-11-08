/**
 * Hash the string and return the value as a number
 * 对字符串进行哈希处理，返回值为数字
 * @param str String to be hashed 待哈希的字符串
 */
const hash = function (str: string): number {
  let hash = 0, i, chr;
  if (str.length === 0) {
    return hash;
  }
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

export default hash;