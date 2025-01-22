'use client';
import Breadcrumbs from '@elements/breadcrumbs';
import Container from '@elements/container';
import Div from '@elements/div';
import Wrapper from '@layouts/wrapper';
import ThumbnailImage2 from '../../../../../public/images/products/thumbnail-2.png';

import OrderItem from './components/order-item';
const items = [
  {
    type: 'Delivered',
    route: '#',
    price: 14.99,
    images: [ThumbnailImage2, ThumbnailImage2, ThumbnailImage2],
    date: '21 Jun 2025',
  },
  {
    type: 'Delivered',
    route: '#',
    price: 14.99,
    images: [ThumbnailImage2, ThumbnailImage2, ThumbnailImage2],
    date: '21 Jun 2025',
  },
];

const MyOrders = () => {
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
      <Wrapper className={'px-5 md:flex-row-reverse flex-col pt-10 gap-5 pb-24'}>
        <Div className={'gap-1 w-full items-center justify-between'}>

        </Div>
        <Div className={'flex-col w-full gap-5'}>
          {items.map((item, index) => (
            <OrderItem
              images={item.images}
              type={item.type}
              price={item.price}
              route={item.route}
              date={item.date}
              key={`order_${index}`} />
          ))}
        </Div>
      </Wrapper>
    </Container>
  );
};

export default MyOrders;
