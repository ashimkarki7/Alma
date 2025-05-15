"use client";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import styles from "@component/manage/manage.module.css";

interface LoginFormProps {
  users?: any;
}

const ManagePage: FC<LoginFormProps> = (props) => {
  const router = useRouter();

  return (
    <div className={`${styles.loginPageContainer}`}>test view security</div>
  );
};
export default ManagePage;
