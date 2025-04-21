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
import TextField from '@elements/text-field';
import EditIcon from '@icons-components/edit';
import PriceInfo from './components/price-info';
import { useParams } from 'next/navigation';
import { DictionariesTypes } from '@dictionaries';
import getParseRoute from '@utils/helpers/parse-route';
import routes from '@routes';
import Media from '@elements/media';
import { motion } from 'motion/react';

const Cart = () => {
  const router = useRouter();
  const { lang } = useParams<{ lang: DictionariesTypes }>();
  const dispatch = useDispatch();
  const { cart, couponModal, isCouponValid, couponValue } = useSelector((state: RootState) => state.shop);
  const { totalPrice, currency } = useSelector((state: RootState) => state.shop);

  const handleBackButton = () => {
    router.back();
  };

  const handleCheckout = () => {
    router.push(getParseRoute({
      pathname: routes['route.products.checkout'],
      locale: lang,
    }));
  };

  const handleCouponModal = () => {
    dispatch(ShopActions.setCouponModal({ open: !couponModal }));
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
            label: 'Cart',
          }]}/>
        </Wrapper>
      </Div>
      <Wrapper className={'px-5 md:flex-row-reverse flex-col pt-4 md:pb-24 pb-36 md:pt-16'}>
        <Div className={'flex-col w-full'}>
          <Div className='w-full justify-between items-center'>
            <Button onClick={handleBackButton} color='control' variant='text' className='!p-0 rotate-180'
              startAdornment={<ArrowRightIcon/>}/>
            <Text typography={['xl', 'xl']}>Your Cart</Text>
            <Div className='w-6 h-10'/>
          </Div>
          <Div className='mt-6 md:mt-28 grid md:grid-cols-3 grid-cols-1 md:gap-16 gap-5 relative overflow-visible'>
            <Div className='flex-col gap-4 md:col-span-2'>
              {cart && cart.length ? cart.map((item: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, translateX: '-400px' }}
                  animate={{ opacity: 1, translateX: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 * (index + 1) }}
                >
                  <ProductItem
                    amount={item.amount}
                    id={item.id}
                    image={item.image}
                    price={item.price}
                    name={item.name}
                  />
                </motion.div>
              )) : null}
              {isCouponValid ? (
                <Div className={'flex-col gap-2 md:mt-9 mt-5'}>
                  <Text typography={['base', 'base']} type={'medium'} color={'black'}>Coupon Number</Text>
                  <Div className='items-center md:gap-5 gap-3'>
                    <TextField className='w-full' value={couponValue}/>
                    <Button onClick={handleCouponModal} rounded={'medium'} size={'large'} shape={'square'}
                      color={'flurries'} startAdornment={<EditIcon/>}/>
                  </Div>
                </Div>
              ) : (
                <Button onClick={handleCouponModal} rounded='large' className='w-full !h-14 md:!h-20 mt-1'
                  color='flurries' size='large'>
                  Add Coupon
                </Button>
              )}
            </Div>
            <Div className='flex-col w-full md:gap-6 gap-3 md:top-36 self-center md:!sticky md:self-start'>
              <Text type='normal' typography={['md', 'md']}>Price Details</Text>
              <PriceInfo/>
              <Media greaterThan={'sm'}>
                <Button onClick={handleCheckout} className='w-full !h-20' color='secondary' size='large'>
                  Continue
                </Button>
              </Media>
            </Div>
          </Div>
        </Div>
      </Wrapper>
      <CouponModal closeModal={handleCouponModal} isShow={couponModal}/>
      <Media lessThan={'md'} className={'shadow-2xl drop-shadow-2xl w-full fixed bottom-0 z-20'}>
        <Div className={'bg-white h-24 px-5 items-center justify-between w-full'}>
          <Div className={'flex-col gap-1'}>
            <Text color={'grey.700'} typography={['lg', 'lg']}>Total Amount</Text>
            <Text type={'bold'}
              typography={['xl', 'xl']}>${(parseFloat(totalPrice) + parseFloat('14.99')).toFixed(2)} {currency}</Text>
          </Div>
          <Button onClick={handleCheckout} className='!h-14 w-[120px]' color='secondary' size='large'>
            Continue
          </Button>
        </Div>
      </Media>
    </Container>
  );
};

export default Cart;
