'use client'
import React from 'react'
import Container from "@elements/container";
import Div from "@elements/div";
import Wrapper from "@layouts/wrapper";
import Breadcrumbs from "@elements/breadcrumbs";
import Button from "@elements/button";
import ArrowRightIcon from "@icons-components/arrow-right";
import Text from "@elements/text";
import {useRouter} from "next-nprogress-bar";


const ProductDetails = () => {
  const router = useRouter();
  const handleBackButton = () => {
    router.back();
  };

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
        <Div className={'gap-4 md:gap-6 flex-col w-full'}>
          <Div className='w-full justify-between items-center'>
            <Button onClick={handleBackButton} color='control' variant='text' className='!p-0 rotate-180'
                    startAdornment={<ArrowRightIcon/>}/>
            <Text typography={['xl', 'xl']}>Your Cart</Text>
            <Div className='w-6 h-10'/>
          </Div>
        </Div>
      </Wrapper>
    </Container>
  )
}

export default ProductDetails;