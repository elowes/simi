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
        simi: object;
    }
}
declare const simi: {
    md5: (str: string, bit?: number | undefined) => string;
    getCookie: (name: string) => string | null;
    uuid: (len?: number, radix?: number) => string;
    debounce: (func: (args: any) => any, wait: number, immediate: boolean) => (args: any) => any;
    throttle: (func: (args: any) => any, wait: number, options: import("./throttle").throttleOptions) => (args: any) => any;
    deepClone: (object: object) => object;
    hash: (str: string) => number;
    type: (variable: any) => string;
};
export default simi;
export { md5, getCookie, uuid, debounce, throttle, deepClone, hash, type };
