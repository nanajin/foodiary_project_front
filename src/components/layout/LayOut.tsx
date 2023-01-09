import Header from '@components/common/Header/Header';
import LoginHeader from '@components/common/Header/LoginHeader';
import React from 'react';
import { LayoutRouteProps, Outlet } from 'react-router-dom';
import styles from './layOut.module.scss';

export const MainLayOut = ({children}:LayoutRouteProps) => {
  return (
    <div className={styles.layout}>
      <Header/>
      <main>
        {children || <Outlet/>}
      </main>
    </div>
  );
};

export const LoginLayout = ({children}:LayoutRouteProps) => {
  return (
    <div className={styles.layout}>
      <LoginHeader/>
      <main className={styles.main}>
        {children || <Outlet/>}
      </main>
    </div>
  );
};