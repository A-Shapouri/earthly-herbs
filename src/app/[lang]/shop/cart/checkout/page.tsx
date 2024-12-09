'use client';
import Breadcrumbs from '@elements/breadcrumbs';
import Container from '@elements/container';
import Div from '@elements/div';
import Wrapper from '@layouts/wrapper';
import Text from '@elements/text';
import ArrowRightIcon from '@icons-components/arrow-right';
import Button from '@elements/button';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@store/root-reducer';
import ProductItem from './components/product-item';
import {useRouter} from 'next-nprogress-bar';
import PriceInfo from '../components/price-info';
import AddressItem from './components/address-item';
import AddAddressModal from './components/add-address-modal';
import {AddressActions} from '@store/address/address-actions';
import AddressListModal from './components/address-list-modal'
import FormControlLabel from "@elements/form-control-label";
import Checkbox from "@elements/checkbox";

const Checkout = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {cart} = useSelector((state: RootState) => state.shop);
  const {shippingAddress, addressModal, addressListModal, billingSameAsShipping, billingAddress} = useSelector((state: RootState) => state.address);

  const handleBackButton = () => {
    router.back();
  };

  const handleAddAddressModal = () => {
    dispatch(AddressActions.setAddressModal({open: !addressModal}));
  };

  const handleAddressListModal = () => {
    dispatch(AddressActions.setAddressListModal({open: !addressListModal}));
  }

  const handleSameAddress = () => {
    dispatch(AddressActions.setBillingAsShipping())
  }

  return (
    <Container>
      <Div className={'bg-flurries-500 w-full justify-center items-center'}>
        <Wrapper className={'px-5 md:px-0'}>
          <Breadcrumbs breadcrumbsData={[{
            label: 'Shop',
            path: '/en/shop',
          },
            {
              path: '/en/shop/cart',
              label: 'Cart',
            },
            {
              label: 'Checkout',
            },
          ]}/>
        </Wrapper>
      </Div>
      <Wrapper className={'px-5 md:flex-row-reverse flex-col pt-4 pb-24 md:pt-16'}>
        <Div className={'flex-col w-full'}>
          <Div className='w-full justify-between items-center'>
            <Button onClick={handleBackButton} color='control' variant='text' className='!p-0 rotate-180' startAdornment={<ArrowRightIcon/>}/>
            <Text typography={['xl', 'xl']}>Checkout</Text>
            <Div className='w-6 h-10'/>
          </Div>
          <Div className='mt-28 grid grid-cols-5 gap-16 relative'>
            <Div className='flex-col gap-4 col-span-3'>
              <Div className={'flex-col gap-4'}>
                <Text>Shipping Address</Text>
                {shippingAddress ? (
                  <AddressItem
                    address={shippingAddress}
                  />
                ) : (
                  <Div className={'flex-col gap-4 items-center justify-center rounded-3xl border border-grey-100 p-4 w-full'}>
                    <Text>There is no available address</Text>
                    <Button onClick={handleAddAddressModal} size={'medium'} color={'secondary'}>Add New Address</Button>
                  </Div>
                )}
              </Div>
              {shippingAddress ? (
                <FormControlLabel label={'Use same address for billing'}>
                  <Checkbox onChange={handleSameAddress} checked={billingSameAsShipping} color={'secondary'}/>
                </FormControlLabel>
              ) : null}
              {shippingAddress && billingAddress && !billingSameAsShipping ? (
                <Div className={'flex-col mt-4'}>
                  <Text>Billing Address</Text>
                  <AddressItem
                    address={billingAddress}
                  />
                </Div>
              ) : null}
            </Div>
            <Div className='flex-col col-span-2 w-full gap-6 self-start'>
              <Text type='normal' typography={['md', 'md']}>Order Summary</Text>
              {cart && cart.length ? cart.map((item: any, index: number) => (
                <ProductItem key={index} amount={item.amount} id={item.id} image={item.image} price={item.price} name={item.name}/>
              )) : null}
              <PriceInfo/>
              <Button className='w-full !h-20' color='secondary' size='large'>
                Place Order
              </Button>
            </Div>
          </Div>
        </Div>
      </Wrapper>
      <AddAddressModal closeModal={handleAddAddressModal} isShow={addressModal}/>
      <AddressListModal closeModal={handleAddressListModal} isShow={addressListModal}/>
    </Container>
  );
};

export default Checkout;
