/**
 * Get cookie value, null if none
 * 获取 cookie 值，没有则返回 null
 * @param name cookie name cookie 名称
 */
declare const getCookie: (name: string) => string | null;
export default getCookie;
