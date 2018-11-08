/**
 * Get cookie value, null if none
 * 获取 cookie 值，没有则返回 null
 * @param name cookie name cookie 名称
 */
const getCookie = function (name: string): string | null {
  let reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  let arr = document.cookie.match(reg);

  if (arr && arr.length > 0) {
    return decodeURI(arr[2]);
  } else {
    return null;
  }
}

export default getCookie;