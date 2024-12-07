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
import ProductItem from './components/product-item/product-item';
import Divider from '@elements/divider';
import { useRouter } from 'next-nprogress-bar';
import CopuonModal from './components/coupon-modal';
import { ShopActions } from '@store/shop/shop-actions';

const Cart = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { cart, totalPrice, currency, couponModal } = useSelector((state: RootState) => state.shop);
  console.log(cart);
  const handleBackButton = () => {
    router.back();
  };


  const handleCouponModal = () => {
    dispatch(ShopActions.setCopuonModal({ open: !couponModal }));
  }
  return (
    <Container>
      <Div className={'bg-flurries-500 w-full justify-center items-center'}>
        <Wrapper className={'px-5 md:px-0'}>
          <Breadcrumbs breadcrumbsData={[{
            label: 'Shop',
            path: 'en/shop',
          },
          {
            label: 'Cart',
          }]} />
        </Wrapper>
      </Div>
      <Wrapper className={'px-5 md:flex-row-reverse flex-col pt-4 pb-24 md:pt-16'}>
        <Div className={'flex-col w-full'}>
          <Div className='w-full justify-between items-center'>
            <Button onClick={handleBackButton} color='control' variant='text' className='!p-0 rotate-180' startAdornment={<ArrowRightIcon />} />
            <Text typography={['xl', 'xl']}>Your Cart</Text>
            <Div className='w-6 h-10' />
          </Div>
          <Div className='mt-28 justify-between grid grid-cols-3 gap-16'>
            <Div className='flex-col gap-4 col-span-2'>
              {cart && cart.length ? cart.map((item: any, index: number) => (
                <ProductItem key={index} amount={item.amount} id={item.id} image={item.image} price={item.price} name={item.name} />
              )) : null}
              <Button onClick={handleCouponModal} rounded='large' className='w-full !h-20 mt-2' color='flurries' size='large'>
                Add Coupon
              </Button>
            </Div>
            <Div className='flex-col w-full gap-6'>
              <Text type='normal' typography={['md', 'md']}>Price Details</Text>
              <Div className='flex-col border border-grey-50 rounded-3xl'>
                <Div className='h-24 items-center px-6 justify-between'>
                  <Text color='grey.800' type='medium' typography={['md', 'md']}>Product Total</Text>
                  <Text typography={['lg', 'lg']}>${totalPrice}</Text>
                </Div>
                <Divider color='control' />
                <Div className='h-24 items-center px-6 justify-between'>
                  <Text color='grey.800' type='medium' typography={['md', 'md']}>Shipping</Text>
                  <Text typography={['lg', 'lg']}>$14.99</Text>
                </Div>
                <Divider color='control' />
                <Div className='h-24 items-center px-6 justify-between'>
                  <Text color='grey.800' type='medium' typography={['md', 'md']}>Total</Text>
                  <Text typography={['lg', 'lg']}>${(parseFloat(totalPrice) + parseFloat('14.99')).toFixed(2)} {currency}</Text>
                </Div>
              </Div>
              <Button className='w-full !h-20' color='secondary' size='large'>
                Continue
              </Button>
            </Div>
          </Div>
        </Div>
      </Wrapper>
      <CopuonModal closeModal={handleCouponModal} isShow={couponModal} />
    </Container>
  );
};

export default Cart;
