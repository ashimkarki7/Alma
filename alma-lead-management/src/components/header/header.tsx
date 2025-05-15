"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "./header.module.css";
import Button from "@/components/button/button";
import { useAppSelector } from "@store/reduxHook";

const Header: React.FC = () => {
  const router = useRouter();
  const users = useAppSelector((state) => state?.rootReducer?.user);

  return (
    <header className={styles.publicHeader}>
      <div className={styles.content}>
        <a href="/">
          <div className={styles.logoImage}>
            <img src="/images/greenicon.png" alt="Green Disc" />
          </div>
        </a>
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
              users?.currentUser && users?.currentUser?.trim() !== ""
                ? "Manage leads"
                : "Login"
            }
            onClickHandler={() => {
              if (users?.currentUser && users?.currentUser?.trim() !== "") {
                router.push("/management");
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
