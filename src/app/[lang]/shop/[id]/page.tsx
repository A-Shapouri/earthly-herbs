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

const ProductDetails = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {productItem, productsDetailsLoading} = useSelector((state: RootState) => state.products);
  const {id} = useParams();

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
            label: 'Details',
          }]}/>
        </Wrapper>
      </Div>
      <Wrapper className={'px-5 md:flex-row-reverse flex-col pt-4 gap-4 pb-24 md:gap-16 md:pt-16'}>
        <Div className={'gap-4 md:gap-28 flex-col w-full'}>
          <Div className='w-full justify-between items-center'>
            <Button onClick={handleBackButton} color='control' variant='text' className='!p-0 rotate-180'
                    startAdornment={<ArrowRightIcon/>}/>
            <Div className='w-6 h-10'/>
          </Div>
          {!productsDetailsLoading ? (
            <Div className={'grid grid-cols-5 gap-16'}>
              <Div className='grid grid-cols-5 gap-4 col-span-3'>
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
              <Div className={'col-span-2 flex-col'}>
                <Text typography={['lg', 'lg']} type={'medium'} color={'grey.700'}>{productItem.title}</Text>
                <Text typography={['xl', 'xl']} type={'normal'} color={'black'}>${productItem.price}</Text>
                <Div className={'mt-4 gap-8'}>
                  <Rating size={['xxs', 'xxs']} value={productItem.rate}/>
                  <Text typography={['md', 'md']} type={'medium'}>Category: {productItem.category}</Text>
                  <Text typography={['md', 'md']} type={'medium'}>Tag: {productItem.tag}</Text>
                </Div>
                <Text typography={['md', 'md']} type={'medium'} align={'start'}
                      className={'mt-8'}>{productItem.description}</Text>
                <Div className={'mt-11 flex-col gap-4'}>
                  <Text typography={['md', 'md']} type={'medium'}>Amount:</Text>
                  <Div className={'gap-4'}>
                    <Div className={'border border-black h-10 px-7 rounded-2xl items-center justify-center'}>
                      <Text typography={['base', 'base']} type={'black'}>100 g</Text>
                    </Div>
                    <Div className={'border border-black h-10 px-7 rounded-2xl items-center justify-center'}>
                      <Text typography={['base', 'base']} type={'black'}>500 g</Text>
                    </Div>
                    <Div className={'border border-black h-10 px-7 rounded-2xl items-center justify-center'}>
                      <Text typography={['base', 'base']} type={'black'}>1000 g</Text>
                    </Div>
                    <Div className={'border border-black h-10 px-7 rounded-2xl items-center justify-center'}>
                      <Text typography={['base', 'base']} type={'black'}>2000 g</Text>
                    </Div>
                  </Div>
                </Div>
                <Button  onClick={() => {}} className='w-full !h-20 mt-20' color='secondary' size='large'>
                  Add to Cart
                </Button>
              </Div>
            </Div>
          ) : null}
        </Div>
      </Wrapper>
    </Container>
  )
}

export default ProductDetails;