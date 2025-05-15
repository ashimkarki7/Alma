export type VariableLiteral = string | number | boolean|any |unknown;
export interface IObjectLiteral<T = VariableLiteral> {
    [key: string]: T | any;
}