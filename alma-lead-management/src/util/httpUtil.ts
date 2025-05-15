// @ts-ignore


import {httpBase} from "./httpBaseUtil.ts";

export function v2Fetch(endpoint :any) {
    return httpBase().get(`${endpoint}`);
}