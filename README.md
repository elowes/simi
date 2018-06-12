# simi
common methods collection 4 JavaScript.

[![Build Status](https://travis-ci.com/elowes/simi.svg?branch=master)](https://travis-ci.com/elowes/simi)
[![codecov](https://codecov.io/gh/elowes/simi/branch/master/graph/badge.svg)](https://codecov.io/gh/elowes/simi)
![npm](https://img.shields.io/npm/dt/simi.svg)

## Already Have Methods
- `getCookie(name)` get cookie
- `md5(str, bit)` md5 string
- `hash(str)` hash a string to number
- `uuid(len, radix)` generate uuid
- `debounce(func, wait, immediate)` function debounce
- `throttle(func, wait, options)` function throttle
- `deepClone(object)` object deepclone
- `type(variable)` judge variable type

## How To Use

``` shell
npm / cnpm install simi --save 
yarn add simi
```

``` js
import simi from "simi"

simi.md5("simi")
simi.isAlpha()
```
or
``` js
import { md5, isAlpha } from "simi"
md5("simi")
isAlpha()
```

## If you only use the few methods in simi, it is recommended to use the following writing method, which will make the packaged JS file smaller
``` js
import md5 from "simi/lib/md5"
md5("simi")
```