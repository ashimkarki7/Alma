// @ts-ignore

import { httpBase } from "./httpBaseUtil.ts";
import {IObjectLiteral} from '@/types/type';

export function v2Fetch(endpoint: string) {
  return httpBase().get(`${endpoint}`);
}

export function store(endpoint: string, data: IObjectLiteral) {
  return httpBase().post(`${endpoint}`, data);
}
