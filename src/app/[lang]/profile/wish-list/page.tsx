'use client';
import Breadcrumbs from '@elements/breadcrumbs';
import Container from '@elements/container';
import Div from '@elements/div';
import Wrapper from '@layouts/wrapper';
import ThumbnailImage2 from '../../../../../public/images/products/thumbnail-2.png';

import Button from "@elements/button";
import Image from "next/image";
import React from "react";
import Text from "@elements/text";
import CartIcon from "@icons-components/cart";

const items = [
  {
    name: 'Indian Malta',
    price: 14.99,
    image: ThumbnailImage2,
    date: '21 Jun 2025',
  },
  {
    name: 'Indian Malta',
    price: 14.99,
    image: ThumbnailImage2,
    date: '21 Jun 2025',
  },
  {
    name: 'Indian Malta',
    price: 14.99,
    image: ThumbnailImage2,
    date: '21 Jun 2025',
  },
  {
    name: 'Indian Malta',
    price: 14.99,
    image: ThumbnailImage2,
    date: '21 Jun 2025',
  },
  {
    name: 'Indian Malta',
    price: 14.99,
    image: ThumbnailImage2,
    date: '21 Jun 2025',
  },
  {
    name: 'Indian Malta',
    price: 14.99,
    image: ThumbnailImage2,
    date: '21 Jun 2025',
  },
];

const WishList = () => {
  return (
    <Container>
      <Div className={'bg-flurries-500 w-full justify-center items-center'}>
        <Wrapper className={'px-5 md:px-0'}>
          <Breadcrumbs breadcrumbsData={[{
            label: 'Profile',
            path: '/en/profile',
          }, {
            label: 'Wish List',
          }]}/>
        </Wrapper>
      </Div>
      <Wrapper className={'px-5 flex-col pt-4 gap-5 pb-10'}>
        {items.map((item, index) => (
          <Div key={index} className={'w-full p-3 flex-col gap-6 border border-gray-300 rounded-2xl'}>
            <Div className={'gap-6'}>
              <Div className={'h-24 w-24 relative'} key={`image_${index}`}>
                <Image fill={true} src={ThumbnailImage2} alt={'image'} />
              </Div>
              <Div className={'flex-col gap-1'}>
                <Text color={'grey.700'} typography={['md', 'md']} type={'medium'}>{item.name}</Text>
                <Text typography={['lg', 'lg']} type={'normal'}>${item.price}</Text>
              </Div>
            </Div>
            <Div className={'grid grid-cols-3 gap-2'}>
              <Button size={'large'} color={'flurries'}>
              Remove
              </Button>
              <Button startAdornment={<CartIcon />} className={'col-span-2'} size={'large'} color={'secondary'}>
                Add To Cart
              </Button>
            </Div>
          </Div>
        ))}
      </Wrapper>
    </Container>
  );
};

export default WishList;
