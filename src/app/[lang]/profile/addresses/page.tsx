'use client';
import Breadcrumbs from '@elements/breadcrumbs';
import Container from '@elements/container';
import Div from '@elements/div';
import Wrapper from '@layouts/wrapper';
import Button from '@elements/button';
import React, { useEffect } from 'react';
import Text from '@elements/text';
import routes from '@routes';
import Link from 'next/link';
import classNames from '@utils/helpers/class-names';
import Divider from '@elements/divider';
import PencilIcon from '@icons-components/pencil';
import ArrowRightIcon from '@icons-components/arrow-right';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@store/root-reducer';
import { AddressActions } from '@store/address/address-actions';
import AddressItem from './address-item';
import AddAddressModal from './add-address-modal';
import EditAddressModal from './edit-address-modal';
import AddressSkeleton from './components/address-skeleton';
import EmptyAddresses from './components/empty-addresses';

const menu = [
  {
    title: 'My Orders',
    route: '/en' + routes['route.profile.orders'],
  },
  {
    title: 'Wishlist',
    route: '/en' + routes['route.profile.wish-list'],
  },
  {
    title: 'Addresses',
    route: '/en' + routes['route.profile.addresses'],
  },
];

const Addresses = () => {
  const { addresses, addressModal, editAddressModal, addressListLoading } = useSelector((state: RootState) => state.address);
  const { firstName, lastName, email } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const [hasLoadedOnce, setHasLoadedOnce] = React.useState(false);

  useEffect(() => {
    dispatch(AddressActions.getAddresses());
  }, []);

  useEffect(() => {
    if (!addressListLoading && addresses.length >= 0) {
      setHasLoadedOnce(true);
    }
  }, [addressListLoading, addresses.length]);

  return (
    <Container>
      <Div className={'bg-flurries-500 w-full justify-center items-center'}>
        <Wrapper className={'px-5 md:px-0'}>
          <Breadcrumbs breadcrumbsData={[{
            label: 'Profile',
            path: '/en/profile',
          }, {
            label: 'Addresses',
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
                  <Text color={item.title === 'Addresses' ? 'primary' : 'black'} typography={['sm', 'sm']} type={'normal'}>{item.title}</Text>
                  <Button className={classNames('!text-black', item.title === 'Addresses' ? '!text-primary' : '')} startAdornment={<ArrowRightIcon />} shape={'square'} variant={'text'} />
                </Link>
                {index !== menu.length - 1 && <Divider color={'control'} />}
              </Div>
            ))}
          </Div>
        </Div>
        <Div className='flex-col gap-5 w-full'>
          {addressListLoading || !hasLoadedOnce ? (
            <Div className="space-y-4 flex-col">
              {[1, 2, 3].map((index) => (
                <AddressSkeleton key={`skeleton-${index}`} />
              ))}
            </Div>
          ) : addresses && addresses.length > 0 ? (
            <Div className="space-y-4 flex-col">
              {addresses.map((item) => (
                <AddressItem key={item.id} address={item} />
              ))}
              <Button
                rounded='medium'
                color={'secondary'}
                onClick={() => dispatch(AddressActions.setAddressModal({ open: true }))}
                className="mt-4"
              >
                Add New Address
              </Button>
            </Div>
          ) : (
            <EmptyAddresses />
          )}
        </Div>
      </Wrapper>
      <AddAddressModal
        isShow={addressModal}
        closeModal={() => dispatch(AddressActions.setAddressModal({ open: false }))}
      />
      <EditAddressModal
        isShow={editAddressModal}
        closeModal={() => dispatch(AddressActions.setEditAddressModal({ open: false }))}
      />
    </Container>
  );
};

export default Addresses;
