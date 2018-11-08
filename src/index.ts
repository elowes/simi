import md5 from "./md5";
import getCookie from "./getCookie";
import uuid from "./uuid";
import debounce from "./debounce";
import throttle from "./throttle";
import deepClone from "./deepClone";
import hash from "./hash";
import type from "./type";

declare global {
  interface Window {
    simi: object
  }
}

const simi = {
  md5,
  getCookie,
  uuid,
  debounce,
  throttle,
  deepClone,
  hash,
  type
}

export default simi;

export {
  md5,
  getCookie,
  uuid,
  debounce,
  throttle,
  deepClone,
  hash,
  type
}

window.simi = simi