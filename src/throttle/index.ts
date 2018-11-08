export interface throttleOptions {
  leading?: boolean,
  trailing?: boolean
}

const NOW = Date.now || function () {
  return new Date().getTime();
};

/**
 * Function throttling method, func will only execute once in wait time
 * 函数节流方法，func 在 wait 时间内只会执行一次
 * @param func Incoming function to be executed 传入待执行的函数
 * @param wait time interval 时间间隔
 * @param options Whether to execute the call on the start boundary and the end boundary, all executed by default 是否执行开始边界和结尾边界上的调用，默认均执行 { leading?: boolean, trailing?: boolean }
 */
const throttle = function (func: (args: any) => any, wait: number, options: throttleOptions): (args: any) => any {
  var context: any, args: any, result: any;
  var timeout: any = null;
  // 上次执行时间点
  var previous = 0;
  if (!options) options = {};
  // 延迟执行函数
  var later = function () {
    // 若设定了开始边界不执行选项，上次执行时间始终为0
    previous = options.leading === false ? 0 : NOW();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  return function (this: any) {
    var now = NOW();
    // 首次执行时，如果设定了开始边界不执行选项，将上次执行时间设定为当前时间。
    if (!previous && options.leading === false) previous = now;
    // 延迟执行时间间隔
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    // 延迟时间间隔remaining小于等于0，表示上次执行至此所间隔时间已经超过一个时间窗口
    // remaining大于时间窗口wait，表示客户端系统时间被调整过
    if (remaining <= 0 || remaining > wait) {
      clearTimeout(timeout);
      timeout = null;
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
      //如果延迟执行不存在，且没有设定结尾边界不执行选项
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
};

export default throttle;