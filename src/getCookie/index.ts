/**
 * Get cookie value, null if none
 * 获取 cookie 值，没有则返回 null
 * @param name cookie name cookie 名称
 */
const getCookie = function (name: string): string | null {
    let reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    let arr = document.cookie.match(reg);

    if (document.cookie.match(reg))
        return decodeURI(arr[2]);
    else
        return null;
}

export default getCookie;