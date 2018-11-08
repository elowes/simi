/**
 * Generate uuid method
 * 生成 uuid 方法
 * @param len Generate the length of uuid, the default length 16 生成 uuid 的长度，默认长度 16
 * @param radix Generate the hexadecimal of uuid, the default hexadecimal 生成 uuid 的进制，默认 16 进制
 */
declare const uuid: (len?: number, radix?: number) => string;
export default uuid;
