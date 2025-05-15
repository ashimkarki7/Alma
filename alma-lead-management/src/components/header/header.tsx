"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "./header.module.css";
import Button from "@/components/button/button";
import {useAppDispatch, useAppSelector} from '@store/reduxHook';
import Image from 'next/image';
import Link from 'next/link';
import {signOut} from '@component/login/slice';

const Header: React.FC = () => {
  const router = useRouter();
  const users = useAppSelector((state) => state?.rootReducer?.user);
  const dispatch = useAppDispatch();
  return (
    <header className={styles.publicHeader}>
      <div className={styles.content}>
        <Link href="/">
          <div className={styles.logoImage}>
            <Image  src="/images/greenicon.png" alt="Green Disc" width={100}  height={100} />
          </div>
        </Link>
        <div className={styles.text}>
          <span className={styles.logo}>almà</span>
          <h1 className={styles.title}>
            Get An Assessment <br />
            Of Your Immigration Case
          </h1>
        </div>
        <div className={styles.button}>
          <Button
            title={
                users?.currentUser === "admin" ? "Manage leads" :
              users?.currentUser && users?.currentUser?.trim() !== ""
                ? "Logout"
                : "Login"
            }
            onClickHandler={() => {
              if (users?.currentUser === "admin") {
                router.push("/management");
              }
              else if (users?.currentUser && users?.currentUser?.trim() !== "") {
                dispatch(signOut())
                router.push('/');
              } else {
                router.push("/login");
              }
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
