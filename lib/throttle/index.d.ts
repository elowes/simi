export interface throttleOptions {
    leading?: boolean;
    trailing?: boolean;
}
/**
 * Function throttling method, func will only execute once in wait time
 * 函数节流方法，func 在 wait 时间内只会执行一次
 * @param func Incoming function to be executed 传入待执行的函数
 * @param wait time interval 时间间隔
 * @param options Whether to execute the call on the start boundary and the end boundary, all executed by default 是否执行开始边界和结尾边界上的调用，默认均执行 { leading?: boolean, trailing?: boolean }
 */
declare const throttle: (func: (args: any) => any, wait: number, options: throttleOptions) => (args: any) => any;
export default throttle;
