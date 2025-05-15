"use client";
import ManagePage from "@component/manage/manage";
import * as leadFormSlice from "@component/login/slice";
import { useAppDispatch, useAppSelector } from "@store/reduxHook";

const ManageFormContainer = (props: any) => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state?.rootReducer?.user);
  const leadData = useAppSelector(
    (state) => state?.rootReducer?.leadData?.payload,
  );
  props = { ...props, users, leadData };
  const signOut = (formData: any) => {
    return dispatch(leadFormSlice.signOut(formData));
  };

  return <ManagePage signOut={signOut} {...props} />;
};
export default ManageFormContainer;
