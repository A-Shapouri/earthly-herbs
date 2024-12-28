'use client'
import React, {useEffect} from 'react'
import Container from "@elements/container";
import Div from "@elements/div";
import Wrapper from "@layouts/wrapper";
import Breadcrumbs from "@elements/breadcrumbs";
import Button from "@elements/button";
import ArrowRightIcon from "@icons-components/arrow-right";
import Text from "@elements/text";
import {useRouter} from "next-nprogress-bar";
import {useParams} from "next/navigation";
import {useDispatch, useSelector} from "react-redux";
import {ProductsActions} from "@store/products/products-actions";
import {RootState} from "@store/root-reducer";
import Image from 'next/image'
import Rating from "@elements/rating";
import Amounts from './components/amounts'
import Action from "./components/action";
import Media from "@elements/media";
import Slider from "@modules/slider";

const ProductDetails = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {productItem, productsDetailsLoading} = useSelector((state: RootState) => state.products);
  const {cart, currency} = useSelector((state: RootState) => state.shop);
  const {id} = useParams<{ id: any }>();
  const cartItem = cart.find((item: any) => item.id.toString() === id.toString());


  const handleBackButton = () => {
    router.back();
  };

  useEffect(() => {
    if (id && typeof id === 'string') {
      dispatch(ProductsActions.getProductDetails({productId: id}))
    }
  }, [id])


  return (
    <Container>
      <Div className={'bg-flurries-500 w-full justify-center items-center'}>
        <Wrapper className={'px-5 md:px-0'}>
          <Breadcrumbs breadcrumbsData={[{
            label: 'Shop',
            path: '/en/shop',
          }, {
            label: productItem?.title,
          }]}/>
        </Wrapper>
      </Div>
      <Wrapper className={'px-5 md:flex-row-reverse flex-col pt-4 gap-4 pb-24 md:gap-16 md:pt-16'}>
        <Div className={'gap-4 md:gap-28 flex-col w-full'}>
          <Div className='w-full justify-between items-center hidden md:visible'>
            <Button onClick={handleBackButton} color='control' variant='text' className='!p-0 rotate-180'
                    startAdornment={<ArrowRightIcon/>}/>
            <Div className='w-6 h-10'/>
          </Div>
          {!productsDetailsLoading ? (
            <Div className={'grid md:grid-cols-5 gap-8 md:gap-16 flex-col grid-cols-1'}>
              <Media className={'w-full col-span-3'} greaterThan={"sm"}>
                <Div className='grid grid-cols-5 gap-4 w-full'>
                  <Div className='col-span-1 grid grid-cols-1 gap-4 max-h-[670px]'>
                    {productItem.imageList.map((image, index) => (
                      <Div className={'relative w-full h-full rounded-2xl shadow-md'}>
                        <Image className={'rounded-2xl'} fill={true} src={image} alt={productItem.title}/>
                      </Div>
                    ))}
                  </Div>
                  <Div
                    className="w-full justify-between items-center relative h-full col-span-4 rounded-2xl shadow-md max-h-[670px]">
                    <Image className={'rounded-2xl'} fill={true} src={productItem.image} alt={productItem.title}/>
                  </Div>
                </Div>
              </Media>
              <Media className={'w-full'} lessThan={'md'}>
                <Slider direction={'ltr'} slides={1}>
                  {productItem.imageList.map((image, index) => (
                    <Div key={index} className={'relative w-full h-60 bg-yellow-500'}>
                      <Image objectFit={'cover'} fill={true} src={image} alt={productItem.title}/>
                    </Div>
                  ))}
                </Slider>
              </Media>
              <Div className={'md:col-span-2 flex-col'}>
                <Text typography={['lg', 'lg']} type={'medium'} color={'grey.700'}>{productItem.title}</Text>
                <Text typography={['xl', 'xl']} type={'normal'} color={'black'}>${productItem.price}</Text>
                <Div className={'mt-4 md:gap-8 gap-4'}>
                  <Rating size={['xxs', 'xxs']} value={productItem.rate}/>
                  <Text typography={['md', 'md']} type={'medium'}>Category: {productItem.category}</Text>
                  <Text typography={['md', 'md']} type={'medium'}>Tag: {productItem.tag}</Text>
                </Div>
                <Text typography={['md', 'md']} type={'medium'} align={'start'}
                      className={'mt-8'}>{productItem.description}</Text>
                <Div className={'mt-11 flex-col gap-4'}>
                  <Text typography={['md', 'md']} type={'medium'}>Amount:</Text>
                  <Amounts data={['100', '500', '1000', '2000']}/>
                </Div>
                <Media greaterThan={'sm'} className={'w-full'}>
                <Action id={id}/>
                </Media>
              </Div>
            </Div>
          ) : null}
        </Div>
      </Wrapper>
      <Media lessThan={'md'} className={'shadow-2xl drop-shadow-2xl w-full fixed bottom-0 z-20'}>
        <Div className={'bg-white h-24 px-5 items-center justify-between w-full gap-4'}>
          {cartItem ? (
            <Div className={'flex-col gap-1 whitespace-nowrap'}>
              <Text className={'whiteSpace-nowrap'} color={'grey.700'} typography={['lg', 'lg']}>Total Amount</Text>
              <Text type={"bold"}
                    typography={['lg', 'lg']}>
                ${(parseFloat(cartItem.price) * cartItem.amount).toFixed(2)} {currency}
              </Text>
            </Div>
          ) : null}
          <Action id={id}/>
        </Div>
      </Media>
    </Container>
  )
}

export default ProductDetails;