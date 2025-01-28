import React from 'react';
import Div from '@elements/div'
import Text from '@elements/text'
import DeliveredIcon from '@icons-components/delivered';
import classNames from "@utils/helpers/class-names";
import ThumbnailImage2 from '../../../../../../../../public/images/products/thumbnail-2.png';
import Image from "next/image";

const ProductItem = () => {


  return (
    <Div className={'w-full border border-gray-300 p-3 rounded-2xl justify-between'}>
      <Div className={'gap-6'}>
        <Div className={'rounded-xl md:rounded-t-2xl md:h-36 md:w-36 h-24 w-24 min-h-24 min-w-24 '}>
          <Image objectFit={'contain'} className={'rounded-xl md:rounded-t-2xl'} src={ThumbnailImage2} alt={'product'}/>
        </Div>
        <Div className={'flex-col justify-between'}>
          <Div className={'flex-col gap-1'}>
          <Text color={'grey.700'} typography={['sm', 'sm']} type={'medium'}>Indian Malta</Text>
          <Text typography={['sm', 'sm']} type={'medium'}>$14.99</Text>
          </Div>
          <Div className={'px-4 rounded-3xl py-2 justify-center items-center bg-flurries'}>
            <Text>100 g</Text>
          </Div>
        </Div>
      </Div>
      <Div className={'bg-grey-50 rounded-full h-12 w-12 justify-center items-center self-end'}>
        <Text typography={['md', 'md']} type={'bold'}>1</Text>
      </Div>
    </Div>
  )
}

export default ProductItem;
