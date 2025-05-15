"use client";
import ManagePage from "@component/manage/manage";
import * as leadFormSlice from "@component/leadform/slice";
import { useAppDispatch, useAppSelector } from "@store/reduxHook";
import {IObjectLiteral} from '@/types/type';

const ManageFormContainer = (props: IObjectLiteral) => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state?.rootReducer?.user);
  const leadData = useAppSelector(
    (state) => state?.rootReducer?.leadData?.payload,
  );
  props = { ...props, users, leadData };

  const updateLeadStatus = (formData: any):any => {
    return dispatch(leadFormSlice.updateLeadStatus(formData));
  };

  return <ManagePage updateLeadStatus={updateLeadStatus}  {...props} />;
};
export default ManageFormContainer;
