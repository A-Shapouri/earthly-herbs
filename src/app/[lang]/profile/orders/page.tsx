'use client';
import Breadcrumbs from '@elements/breadcrumbs';
import Container from '@elements/container';
import Div from '@elements/div';
import Wrapper from '@layouts/wrapper';
import ThumbnailImage2 from '../../../../../public/images/products/thumbnail-2.png';
import routes from '@routes';

import OrderItem from './components/order-item';
import Section from './components/section';
import getParseRoute from '@utils/helpers/parse-route';
import Divider from '@elements/divider';
import PencilIcon from '@icons-components/pencil';
import Link from 'next/link';
import Text from '@elements/text';
import Button from '@elements/button';
import ArrowRightIcon from '@icons-components/arrow-right';
import classNames from '@utils/helpers/class-names';
import { useSelector } from 'react-redux';
import { RootState } from '@store/root-reducer';

const items = [
  {
    type: 'Delivered',
    route: getParseRoute({ pathname: routes['route.profile.order-details'], query: { id: '1' }, locale: 'en' }),
    price: 14.99,
    images: [ThumbnailImage2, ThumbnailImage2, ThumbnailImage2],
    date: '21 Jun 2025',
  },
  {
    type: 'Delivered',
    route: getParseRoute({ pathname: routes['route.profile.order-details'], query: { id: '2' }, locale: 'en' }),
    price: 14.99,
    images: [ThumbnailImage2, ThumbnailImage2, ThumbnailImage2],
    date: '21 Jun 2025',
  },
];

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

const MyOrders = () => {
  const { firstName, lastName, email } = useSelector((state: RootState) => state.auth);

  return (
    <Container>
      <Div className={'bg-flurries-500 w-full justify-center items-center'}>
        <Wrapper className={'px-5 md:px-0'}>
          <Breadcrumbs breadcrumbsData={[{
            label: 'Profile',
            path: '/en/profile',
          }, {
            label: 'My Orders',
          }]}/>
        </Wrapper>
      </Div>
      <Wrapper className={'px-5 pt-4 gap-5 pb-10 md:flex-row flex-col'}>
        <Div className={'rounded-lg flex-col p-4 gap-5 border border-control-100 md:min-w-[400px] pb-0 h-fit md:sticky top-36'}>
          <Div className={'gap-1 w-full items-center justify-between'}>
            <Div className={'flex-col w-full'}>
              <Text typography={['sm', 'sm']} type={'normal'}>{firstName} {lastName}</Text>
              <Text color={'grey.700'} typography={['xs', 'xs']} type={'medium'}>{email}</Text>
            </Div>
            <Button shape={'square'} startAdornment={<PencilIcon/>} variant={'text'}/>
          </Div>
          <Div className={'flex-col w-full'}>
            {menu.map((item, index) => (
              <Div key={`menu_${index}`} className={'w-full flex-col'}>
                <Link href={item.route} className={'flex justify-between items-center py-4 cursor-pointer'}>
                  <Text color={item.title === 'My Orders' ? 'primary' : 'black'} typography={['sm', 'sm']} type={'normal'}>{item.title}</Text>
                  <Button className={classNames('!text-black', item.title === 'My Orders' ? '!text-primary' : '')} startAdornment={<ArrowRightIcon/>} shape={'square'} variant={'text'}/>
                </Link>
                {index !== menu.length - 1 && <Divider color={'control'} />}
              </Div>
            ))}
          </Div>
        </Div>
        <Div className='flex-col gap-5 w-full'>
          <Div className={'gap-4 w-full items-center justify-between overflow-x-auto'}>
            <Section title={'Delivered'} selected={true} onClick={() => {}}/>
            <Section title={'Canceled'} selected={false} onClick={() => {}}/>
            <Section title={'Processing'} selected={false} onClick={() => {}}/>
          </Div>
          <Div className={'flex-col w-full gap-5'}>
            {items.map((item, index) => (
              <OrderItem
                images={item.images}
                type={item.type}
                price={item.price}
                route={item.route}
                date={item.date}
                key={`order_${index}`}/>
            ))}
          </Div>
        </Div>
      </Wrapper>
    </Container>
  );
};

export default MyOrders;
