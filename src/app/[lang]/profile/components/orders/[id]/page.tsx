'use client';
import Breadcrumbs from '@elements/breadcrumbs';
import Container from '@elements/container';
import Div from '@elements/div';
import Wrapper from '@layouts/wrapper';
import StatusBar from './components/status-bar';
import Info from './components/info';
import ProductItem from './components/product-item';

import { useParams } from 'next/navigation';
import Actions from './components/actions';

const MyOrders = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Container>
      <Div className={'bg-flurries-500 w-full justify-center items-center'}>
        <Wrapper className={'px-5 md:px-0'}>
          <Breadcrumbs breadcrumbsData={[{
            label: 'Profile',
            path: '/en/profile',
          }, {
            label: 'My Orders',
            path: '/en/profile/orders',
          }, {
            label: id,
          }]}/>
        </Wrapper>
      </Div>
      <Wrapper className={'px-5 flex-col pt-4 gap-5 pb-10'}>
        <StatusBar status={'delivered'}/>
        <Info/>
        <Div className={'flex-col gap-3'}>
          <ProductItem />
          <ProductItem/>
        </Div>
        <Actions />
      </Wrapper>
    </Container>
  );
};

export default MyOrders;
