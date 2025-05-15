"use client";
import LeadFormComponent from "../login";
import * as leadFormSlice from "@component/login/slice";
import { useAppDispatch, useAppSelector } from "@store/reduxHook";
import {IObjectLiteral} from '@/types/type';

const LoginFormContainer = (props: IObjectLiteral) => {
  const dispatch = useAppDispatch();

  const users = useAppSelector((state) => state?.rootReducer?.user);

  props = { ...props, users };
  const signIn = (formData: IObjectLiteral) => {
    return dispatch(leadFormSlice.signIn(formData));
  };

  const signUp = (formData: IObjectLiteral) => {
    return dispatch(leadFormSlice.signUp(formData));
  };
  const signOut = (formData: IObjectLiteral) => {
    return dispatch(leadFormSlice.signOut(formData));
  };

  return (
    <LeadFormComponent
      signIn={signIn}
      signUp={signUp}
      signOut={signOut}
      {...props}
    />
  );
};
export default LoginFormContainer;
