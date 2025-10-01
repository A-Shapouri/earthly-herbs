'use client';
import React, { ReactNode, useEffect } from 'react';
import Layout from '@layouts/layout';
import { getFromCookie } from '@utils/helpers/cookie';
import { useDispatch } from 'react-redux';
import { AuthActions } from '@store/auth/auth-actions';
import { useParams, useRouter } from 'next/navigation';
import { DictionariesTypes } from '@dictionaries';
import { NavigationActions } from '@store/navigation/navigation-actions';
import { ShopActions } from '@store/shop/shop-actions';

const Wrapper = ({ children }: { children: ReactNode }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { lang } = useParams<{ lang: DictionariesTypes }>();
  const token = getFromCookie('token');

  useEffect(() => {
    dispatch(NavigationActions.setLang({ lang: lang }));
  }, [lang]);

  useEffect(() => {
    if (token) {
      dispatch(AuthActions.getInfo());
      dispatch(ShopActions.getCart());
      dispatch(AuthActions.getWishList());
    }
    dispatch(NavigationActions.setNavigation({ navigation: router }));
  }, [token]);

  return (
    <Layout>
      {children}
    </Layout>
  );
};

export default Wrapper;
