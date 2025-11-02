'use client';
import Breadcrumbs from '@elements/breadcrumbs';
import Container from '@elements/container';
import Div from '@elements/div';
import Wrapper from '@layouts/wrapper';
import Text from '@elements/text';
import ArrowRightIcon from '@icons-components/arrow-right';
import Button from '@elements/button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/root-reducer';
import ProductItem from './components/product-item';
import { useRouter } from 'next-nprogress-bar';
import PriceInfo from '../components/price-info';
import AddressItem from './components/address-item';
import AddAddressModal from './components/add-address-modal';
import { AddressActions } from '@store/address/address-actions';
import AddressListModal from './components/address-list-modal';
// import FormControlLabel from '@elements/form-control-label';
// import Checkbox from '@elements/checkbox';
import ShippingOptionItem from './components/shipping-option-item';
import ShippingOptionListModal from './components/shipping-option-list-modal';
import { ShopActions } from '@store/shop/shop-actions';
// import CardInfo from './components/card-info';
// import Bank1 from '@images-components/banks/bank-1';
// import Bank2 from '@images-components/banks/bank-2';
// import Bank3 from '@images-components/banks/bank-3';
// import Bank4 from '@images-components/banks/bank-4';
// import Bank5 from '@images-components/banks/bank-5';
// import TextField from '@elements/text-field';
import Media from '@elements/media';
import { motion } from 'motion/react';
import { useEffect } from 'react';

const Checkout = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    cart,
    shippingOption,
    shippingOptionListModal,
    totalPrice,
    currency,
    orderLoading,
  } = useSelector((state: RootState) => state.shop);
  const {
    shippingAddress,
    addressModal,
    addressListModal,
    addressModalType,
  } = useSelector((state: RootState) => state.address);
  const { userId } = useSelector((state: RootState) => state.auth);
  const handleBackButton = () => {
    router.back();
  };

  useEffect(() => {
    dispatch(AddressActions.getAddresses());
    dispatch(ShopActions.getShippingCouriersList());
  }, []);

  const handleAddAddressModal = () => {
    dispatch(AddressActions.setAddressModal({ open: !addressModal }));
  };

  const handleAddressListModal = () => {
    dispatch(AddressActions.setAddressListModal({ open: !addressListModal, addressModalType: addressModalType }));
  };

  // const handleSameAddress = () => {
  //   dispatch(AddressActions.setBillingAsShipping());
  // };

  const handleShippingOptionListModal = () => {
    dispatch(ShopActions.setShippingOptionListModal({ open: !shippingOptionListModal }));
  };

  const handlePlaceOrder = () => {
    dispatch(ShopActions.createOrder({
      customerId: userId,
      customerAddressId: shippingAddress?.id?.toString(),
      total: totalPrice,
      products: cart.map((item: any) => ({
        productId: item?.product?.[0]?.id?.toString(),
        quantity: item?.quantity?.toString(),
      })),
      shipments: {
        id: shippingOption?.id,
        carrier: shippingOption?.shippingCourierCode,
      },
    }));
  };
  return (
    <Container>
      <Div className={'bg-flurries-500 w-full justify-center items-center'}>
        <Wrapper className={'px-5 md:px-0'}>
          <Breadcrumbs breadcrumbsData={[{
            label: 'products',
            path: '/en/products',
          },
          {
            path: '/en/products/cart',
            label: 'Cart',
          },
          {
            label: 'Checkout',
          },
          ]} />
        </Wrapper>
      </Div>
      <Wrapper className={'px-5 md:flex-row-reverse flex-col pt-4 md:pb-24 pb-36 md:pt-16'}>
        <Div className={'flex-col w-full'}>
          <Div className='w-full justify-between items-center'>
            <Button onClick={handleBackButton} color='control' variant='text' className='!p-0 rotate-180'
              startAdornment={<ArrowRightIcon />} />
            <Text typography={['xl', 'xl']}>Checkout</Text>
            <Div className='w-6 h-10' />
          </Div>
          <Div className='mt-6 md:mt-28 grid md:grid-cols-5 grid-cols-1 gap-16 relative'>
            <Div className='flex-col gap-4 md:col-span-3 w-full'>
              <Div className={'flex-col md:gap-4 gap-3 w-full'}>
                <Text>Shipping Address</Text>
                {shippingAddress ? (
                  <AddressItem
                    address={shippingAddress}
                    shipping={true}
                  />
                ) : (
                  <Div
                    className={'flex-col gap-4 items-center justify-center rounded-3xl border border-grey-100 p-4 w-full'}>
                    <Text>There is no available address</Text>
                    <Button onClick={handleAddAddressModal} size={'medium'} color={'secondary'}>Add New Address</Button>
                  </Div>
                )}
              </Div>
              {/* {shippingAddress ? (
                <FormControlLabel label={'Use same address for billing'}>
                  <Checkbox onChange={handleSameAddress} checked={billingSameAsShipping} color={'secondary'} />
                </FormControlLabel>
              ) : null} */}
              {/* <AnimatePresence>
                {shippingAddress && billingAddress && !billingSameAsShipping ? (
                  <motion.div
                    className='w-full flex'
                    exit={{ opacity: 0, height: 0, transition: { duration: 0.3 } }}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto', transition: { duration: 0.5 } }}
                  >
                    <Div className={'flex-col mt-4 md:gap-4 gap-3 w-full'}>
                      <Text>Billing Address</Text>
                      <AddressItem
                        address={billingAddress}
                        shipping={false}
                      />
                    </Div>
                  </motion.div>
                ) : null}
              </AnimatePresence> */}
              <Div className={'flex-col mt-4 md:gap-4 gap-3'}>
                <Text>Shipping Option</Text>
                <ShippingOptionItem
                  option={shippingOption}
                />
              </Div>
              {/* <Div className={'flex-col mt-4 md:gap-4 gap-3'}>
                <Div className={'items-center justify-between'}>
                  <Text>Credit / debit card</Text>
                  <Div className={'items-center gap-1'}>
                    <Bank1 />
                    <Bank2 />
                    <Bank3 />
                    <Bank4 />
                    <Bank5 />
                  </Div>
                </Div>
                <CardInfo />
              </Div>
              <Div className={'flex-col mt-4 md:gap-4 gap-3'}>
                <Text>Notes</Text>
                <TextField
                  className={'w-full'}
                  multiline={true}
                  maxRows={3}
                  placeholder={'Notes about your order, e.g. special notes for delivery'}
                  inputClassName={'min-h-14'}
                />
              </Div> */}
            </Div>
            <Media greaterThan={'sm'} className={'md:col-span-2'}>
              <Div className='flex-col w-full gap-6 self-start'>
                <Text type='normal' typography={['md', 'md']}>Order Summary</Text>
                {cart && cart.length ? cart.map((item: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, translateX: '400px' }}
                    animate={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 * (index + 1) }}
                  >
                    <ProductItem key={index} amount={item.quantity} id={item.id} image={item?.image} price={item?.product?.[0]?.price}
                      name={item?.product?.[0]?.model} />
                  </motion.div>
                )) : null}
                <PriceInfo hasShipping={true} />
                <Button onClick={handlePlaceOrder} className='w-full !h-20' color='secondary' size='large' disabled={orderLoading} loading={orderLoading}>
                  Place Order
                </Button>
              </Div>
            </Media>
          </Div>
        </Div>
      </Wrapper>
      <Media lessThan={'md'} className={'shadow-2xl drop-shadow-2xl w-full fixed bottom-0 z-20'}>
        <Div className={'bg-white h-24 px-5 items-center w-full justify-between'}>
          <Div className={'flex-col gap-1'}>
            <Text color={'grey.700'} typography={['lg', 'lg']}>Total Amount</Text>
            <Text type={'bold'}
              typography={['xl', 'xl']}>${(parseFloat(totalPrice) + parseFloat('14.99')).toFixed(2)} {currency}</Text>
          </Div>
          <Button onClick={handlePlaceOrder} className='!h-14 w-[120px]' color='secondary' size='large' disabled={orderLoading} loading={orderLoading}>
            Place Order
          </Button>
        </Div>
      </Media>
      <AddAddressModal closeModal={handleAddAddressModal} isShow={addressModal} />
      <AddressListModal type={addressModalType} closeModal={handleAddressListModal} isShow={addressListModal} />
      <ShippingOptionListModal isShow={shippingOptionListModal} closeModal={handleShippingOptionListModal} />
    </Container>
  );
};

export default Checkout;
