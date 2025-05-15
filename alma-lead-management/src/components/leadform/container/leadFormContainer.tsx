"use client";
import LeadFormComponent from "../leadform";
import * as leadFormSlice from "@component/leadform/slice";
import { useAppDispatch, useAppSelector } from "@store/reduxHook";

const LeadFormContainer = (props: any) => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state?.rootReducer?.user);
  const leadData = useAppSelector(
    (state) => state?.rootReducer?.leadData?.payload,
  );
  const leadDataLoading = useAppSelector(
    (state) => state?.rootReducer?.leadData?.loading,
  );

  props = { ...props, leadData, leadDataLoading, users };
  const submitForm = (formData: any) => {
    return dispatch(leadFormSlice.submitForm(formData));
  };

  return <LeadFormComponent submitForm={submitForm} {...props} />;
};
export default LeadFormContainer;
