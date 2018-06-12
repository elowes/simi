/**
 * Deep copy of the incoming object
 * 对传入的对象进行深拷贝
 * @param object Incoming object element 传入对象元素
 */
const deepClone = function (object: object): object {
  try {
    let copy = JSON.stringify(object);
    return JSON.parse(copy);
  } catch (error) {
    throw new TypeError("arguments is not object");
  }
}

export default deepClone;