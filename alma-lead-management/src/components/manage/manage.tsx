"use client";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import styles from "@component/manage/manage.module.css";
import {IObjectLiteral} from '@/types/type';
import Button from '@component/button';

interface LoginFormProps {
  users?: IObjectLiteral;
  leadData?: IObjectLiteral;
  updateLeadStatus: (formData: number) => Promise<void>;
}

const ManagePage: FC<LoginFormProps> = (props) => {
  const router = useRouter();
  const { leadData,updateLeadStatus } = props;
  const handleStatusChange = (index: number) => {
    updateLeadStatus(index)
  };

  return (
    <div className={styles.MangeLeadContainer} id={"leadPage"}>
      <h2>Leads</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Submitted</th>
            <th>Status</th>
            <th>Country</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {leadData?.length > 0 ? (
              leadData?.map((lead: IObjectLiteral, idx: number) => (
              <tr key={idx}>
                <td>{lead?.name}</td>
                <td>{lead?.submitted}</td>
                <td>{lead?.status}</td>
                <td>{lead?.country}</td>
                <td>
                  {lead?.status === "Pending" && (
                    <Button title={'Mark as Reached Out'} onClickHandler={() => handleStatusChange(idx)} className={'buttonMark'}/>
                  )}
                  {lead?.status === "Reached Out" && (
                    <Button disabled={true} title={'Reached Out'} onClickHandler={() => handleStatusChange(idx)}  className={'buttonReached'}/>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className={styles.empty}>
                No leads found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default ManagePage;
