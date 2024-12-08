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
import { useRouter } from 'next-nprogress-bar';
import CouponModal from './components/coupon-modal';
import { ShopActions } from '@store/shop/shop-actions';
import TextField from "@elements/text-field";
import EditIcon from "@icons-components/edit";
import PriceInfo from './components/price-info'
import {useParams} from "next/navigation";
import {DictionariesTypes} from "@dictionaries";
import getParseRoute from "@utils/helpers/parse-route";
import routes from "@routes";

const Cart = () => {
  const router = useRouter();
  const {lang} = useParams<{lang: DictionariesTypes}>()
  const dispatch = useDispatch();
  const { cart, couponModal, isCouponValid, couponValue  } = useSelector((state: RootState) => state.shop);

  const handleBackButton = () => {
    router.back();
  };

  const handleCheckout = () => {
    router.push(getParseRoute({
      pathname: routes['route.shop.checkout'],
      locale: lang
    }));
  }


  const handleCouponModal = () => {
    dispatch(ShopActions.setCouponModal({ open: !couponModal }));
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
          <Div className='mt-28 grid grid-cols-3 gap-16 relative overflow-visible'>
            <Div className='flex-col gap-4 col-span-2'>
              {cart && cart.length ? cart.map((item: any, index: number) => (
                <ProductItem key={index} amount={item.amount} id={item.id} image={item.image} price={item.price} name={item.name} />
              )) : null}
              {isCouponValid ? (
                <Div className={'flex-col gap-2 mt-9'}>
                  <Text typography={['base', 'base']} type={'medium'} color={'black'}>Coupon Number</Text>
                  <Div className='items-center gap-5' >
                    <TextField className='w-full' value={couponValue} />
                    <Button onClick={handleCouponModal} rounded={'medium'} size={'large'} shape={'square'} color={'flurries'} startAdornment={<EditIcon />}/>
                  </Div>
                </Div>
              ) : (
                <Button onClick={handleCouponModal} rounded='large' className='w-full !h-20 mt-2' color='flurries' size='large'>
                  Add Coupon
                </Button>
              )}
            </Div>
            <Div className='flex-col w-full gap-6 sticky top-36 !sticky self-start'>
              <Text type='normal' typography={['md', 'md']}>Price Details</Text>
              <PriceInfo />
              <Button onClick={handleCheckout} className='w-full !h-20' color='secondary' size='large'>
                Continue
              </Button>
            </Div>
          </Div>
        </Div>
      </Wrapper>
      <CouponModal closeModal={handleCouponModal} isShow={couponModal} />
    </Container>
  );
};

export default Cart;
