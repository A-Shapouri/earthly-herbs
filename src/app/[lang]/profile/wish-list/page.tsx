'use client';
import Breadcrumbs from '@elements/breadcrumbs';
import Container from '@elements/container';
import Div from '@elements/div';
import Wrapper from '@layouts/wrapper';
import ThumbnailImage2 from '../../../../../public/images/products/thumbnail-2.png';

import Button from '@elements/button';
import Image from 'next/image';
import React, { useEffect } from 'react';
import Text from '@elements/text';
import CartIcon from '@icons-components/cart';
import routes from '@routes';
import Link from 'next/link';
import classNames from '@utils/helpers/class-names';
import Divider from '@elements/divider';
import PencilIcon from '@icons-components/pencil';
import ArrowRightIcon from '@icons-components/arrow-right';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@store/root-reducer';
import { AuthActions } from '@store/auth/auth-actions';
import { ShopActions } from '@store/shop/shop-actions';

const menu = [
  {
    title: 'My Orders',
    route: '/en' + routes['route.profile.orders'],
  },
  {
    title: 'Wishlist',
    route: '/en' + routes['route.profile.wish-list'],
  },
];

const WishList = () => {
  const { firstName, lastName, email, wishList } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AuthActions.getWishList());
  }, []);

  return (
    <Container>
      <Div className={'bg-flurries-500 w-full justify-center items-center'}>
        <Wrapper className={'px-5 md:px-0'}>
          <Breadcrumbs breadcrumbsData={[{
            label: 'Profile',
            path: '/en/profile',
          }, {
            label: 'Wish List',
          }]} />
        </Wrapper>
      </Div>
      <Wrapper className={'px-5 pt-4 gap-5 pb-10 md:flex-row flex-col'}>
        <Div className={'rounded-lg flex-col p-4 gap-5 border border-control-100 md:min-w-[400px] pb-0 h-fit md:sticky top-36'}>
          <Div className={'gap-1 w-full items-center justify-between'}>
            <Div className={'flex-col w-full'}>
              <Text typography={['sm', 'sm']} type={'normal'}>{firstName} {lastName}</Text>
              <Text color={'grey.700'} typography={['xs', 'xs']} type={'medium'}>{email}</Text>
            </Div>
            <Button shape={'square'} startAdornment={<PencilIcon />} variant={'text'} />
          </Div>
          <Div className={'flex-col w-full'}>
            {menu.map((item, index) => (
              <Div key={`menu_${index}`} className={'w-full flex-col'}>
                <Link href={item.route} className={'flex justify-between items-center py-4 cursor-pointer'}>
                  <Text color={item.title === 'Wishlist' ? 'primary' : 'black'} typography={['sm', 'sm']} type={'normal'}>{item.title}</Text>
                  <Button className={classNames('!text-black', item.title === 'Wishlist' ? '!text-primary' : '')} startAdornment={<ArrowRightIcon />} shape={'square'} variant={'text'} />
                </Link>
                {index !== menu.length - 1 && <Divider color={'control'} />}
              </Div>
            ))}
          </Div>
        </Div>
        <Div className='flex-col gap-5 w-full'>
          {wishList.map((item, index) => (
            <Div key={index} className={'w-full p-3 flex-col gap-6 border border-gray-300 rounded-2xl'}>
              <Div className={'gap-6'}>
                <Div className={'h-24 w-24 relative'} key={`image_${index}`}>
                  <Image fill={true} src={ThumbnailImage2} alt={'image'} />
                </Div>
                <Div className={'flex-col gap-1'}>
                  <Text color={'grey.700'} typography={['xs', 'xs']} type={'medium'}>{item.name || 'product name'}</Text>
                  <Text typography={['sm', 'sm']} type={'normal'}>${item.price || 'product price'}</Text>
                </Div>
              </Div>
              <Div className={'grid grid-cols-3 gap-2'}>
                <Button onClick={() => dispatch(AuthActions.removeFromWishList({ productId: item.id }))} size={'large'} color={'flurries'}>
                  Remove
                </Button>
                <Button onClick={() => dispatch(ShopActions.addToCart({ id: item.productId, name: item.name || 'product name', price: item.price || 'product price', image: item.image || 'product image' }))} startAdornment={<CartIcon />} className={'col-span-2'} size={'large'} color={'secondary'}>
                  Add To Cart
                </Button>
              </Div>
            </Div>
          ))}
        </Div>
      </Wrapper>
    </Container>
  );
};

export default WishList;
