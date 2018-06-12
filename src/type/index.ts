/**
 * Variable type check, return value is null, undefined, number, array, string, symbol, object
 * 变量类型检查，返回值为 null、undefined、number、array、string、symbol、object
 * @param variable Type of variable to check 待检查类型的变量
 */
const type = function (variable: any): string {
  let toString = {}.toString;
  return toString.call(variable).slice(8, -1).toLowerCase()
}

export default type
