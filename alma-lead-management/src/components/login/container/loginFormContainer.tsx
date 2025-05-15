"use client";
import LoginPage from "../login";
import * as leadFormSlice from "@component/login/slice";
import { useAppDispatch, useAppSelector } from "@store/reduxHook";
import {IObjectLiteral} from '@/types/type';

const LoginFormContainer = (props: IObjectLiteral) => {
  const dispatch = useAppDispatch();

  const users = useAppSelector((state) => state?.rootReducer?.user);

  props = { ...props, users };
  const signIn = (formData: any): any => {
    return dispatch(leadFormSlice.signIn(formData));
  };

  const signUp = (formData: any):any => {
    return dispatch(leadFormSlice.signUp(formData));
  };


  return (
    <LoginPage
      signIn={signIn}
      signUp={signUp}
      {...props}
    />
  );
};
export default LoginFormContainer;
