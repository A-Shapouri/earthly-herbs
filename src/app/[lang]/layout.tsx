'use client';
import React, {ReactNode, useEffect} from 'react';
import Layout from '@layouts/layout';
import {getFromCookie} from "@utils/helpers/cookie";
import {useDispatch} from "react-redux";
import {AuthActions} from "@store/auth/auth-actions";

const Wrapper = ({children}: { children: ReactNode }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = getFromCookie('token')
    if (token) {
      dispatch(AuthActions.clientLogin())
    }
  }, []);

  return (
    <Layout>
      {children}
    </Layout>
  );
};

export default Wrapper;
