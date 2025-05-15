"use client";
import React, {ReactNode, FC, MouseEvent, Fragment} from 'react';
import {usePathname, useRouter} from 'next/navigation';
import styles from "./SideBar.module.css";
import {sideBarRoutes} from '@enum/routeList';
import Button from '@component/button';
import {useAppDispatch, useAppSelector} from '@store/reduxHook';
import {signOut} from '@component/login/slice';

const SideBar: FC<{ children: ReactNode }> = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state?.rootReducer?.user?.currentUser);

  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <div>
          <div className={styles.logo}>almà</div>
          <nav className={styles.navLinks}>
            {sideBarRoutes?.map((route:any,index:any) => {
              if (route.path === '/logout') {
                return (
                    <Fragment key={index}>
                    <Button
                        title={route.name}
                        onClickHandler={(evt: MouseEvent<HTMLButtonElement>) => {
                          evt.preventDefault();
                          dispatch(signOut())
                          router.push('/');
                        }
                        }
                    />
                    </Fragment>
                );

              }else {
                return(
                    <div
                        onClick={() =>{
                            router.push(route.path)}}
                        className={`${styles?.link} ${usePathname() === route.path ? styles.active : ''}`}
                        key={route.path}
                        style={{
                          fontWeight: usePathname() === route.path ? 'bold' : 'normal',
                        }}
                    >
                      {route.name}
                    </div>
                )
              }

            })}
          </nav>
        </div>
        <div className={styles.adminFooter}>
          <div className={styles.avatar}>A</div>
          <span className={styles.adminLabel}>{currentUser ? currentUser?.toUpperCase() : ''}</span>
        </div>
      </aside>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default SideBar;
