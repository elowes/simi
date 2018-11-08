/**
 * String md5 encryption method
 * 字符串 md5 加密方法
 * @param str To encrypt the string 待加密字符串
 * @param bit Encryption bit (default 32 bits) 加密位数（默认 32 位）
 */
declare const md5: (str: string, bit?: number) => string;
export default md5;
