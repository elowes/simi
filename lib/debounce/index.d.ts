/**
 * The function debounce method, func will be executed after the wait time. If you trigger again within the wait time, reset the wait time
 * 函数去抖方法，func 会在 wait 时间后执行。如果在 wait 时间内再次触发，则重置 wait 时间
 * @param func Incoming function to be executed 传入待执行的函数
 * @param wait Waiting time 等待的时间
 * @param immediate Whether it is executed immediately or not. If true, func will be executed immediately when it is called, and if it is triggered again within the wait time, it will reset the wait time. 是否立即执行，如果为 true，则 func 会在调用时立即执行，如果在 wait 时间内再次触发，则重置 wait 时间
 */
declare const debounce: (func: (args: any) => any, wait: number, immediate: boolean) => (args: any) => any;
export default debounce;
