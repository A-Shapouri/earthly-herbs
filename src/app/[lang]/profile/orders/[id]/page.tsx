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
import Text from '@elements/text';
import Button from '@elements/button';
import Link from 'next/link';
import Divider from '@elements/divider';
import classNames from '@utils/helpers/class-names';
import PencilIcon from '@icons-components/pencil';
import ArrowRightIcon from '@icons-components/arrow-right';
import { useSelector } from 'react-redux';
import { RootState } from '@store/root-reducer';
import routes from '@routes';

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
        <Div className={'flex-col gap-5 w-full'}>
          <StatusBar status={'delivered'}/>
          <Info/>
          <Div className={'flex-col gap-3'}>
            <ProductItem />
            <ProductItem/>
          </Div>
          <Actions />
        </Div>
      </Wrapper>
    </Container>
  );
};

export default MyOrders;
