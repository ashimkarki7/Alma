// @ts-ignore

import { httpBase } from "./httpBaseUtil.ts";

export function v2Fetch(endpoint: any) {
  return httpBase().get(`${endpoint}`);
}

export function store(endpoint: any, data: any) {
  return httpBase().post(`${endpoint}`, data);
}
