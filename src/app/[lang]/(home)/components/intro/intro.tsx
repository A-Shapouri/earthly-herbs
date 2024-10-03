import React from 'react';
import Wrapper from '@layouts/wrapper';
import Text from '@elements/text';
import Div from '@elements/div';
import Button from '@elements/button';
import Chip from '@elements/chip';
import FlowerOneImage from '@images-components/flower_one';
import ArrowRightIcon from '@icons-components/arrow-right';
import Services from './sub-components/services';
import DaySymphony from '../../../../../../public/images/home/day-symphony.png'
import Image from 'next/image'

const Intro = () => {
  return (
    <Div className={'bg-flurries-500 w-full justify-center items-center'}>
      <Wrapper className={'md:flex-row flex-col justify-between z-10'}>
        {/* <Div className={'absolute bottom-0 left-0'}>
          <FlowerOneImage />
        </Div> */}
        <Div className={'flex-col px-8 md:px-0 md:pr-20 md:gap-7 gap-4 md:my-32 my-8'}>
          <Text type={'black'} className={'leading-7 md:leading-[57px] whitespace-nowrap'} typography={['xxl', 'huge']}>Fresh & Healthy<br /> Organic Tea</Text>
          <Div className={'gap-3'}>
            <Div className={'w-0.5 md:h-16 h-[50px] bg-brown rounded-full'} />
            <Div className={'flex-col md:gap-2 gap-1'}>
              <Div className={'gap-2 items-center'}>
                <Text typography={['md', 'md']}>Sale up to</Text>
                <Chip color={'brown'} rounded={'small'} value={'30% OFF'} />
              </Div>
              <Text type={'medium'} color={'brown'} typography={['xs', 'xs']}>Free shipping on all your order.</Text>
            </Div>
          </Div>
          <Button startAdornment={<ArrowRightIcon />} color={'secondary'} rounded={'full'} size={'large'} className={'md:w-[183px] w-32'}>
            Shop now
          </Button>
        </Div>
        <Div className={'w-1/2 h-1/2 self-center'}>
          <Image src={DaySymphony} alt='earthly' />
        </Div>
        <Services />
      </Wrapper>
    </Div>
  );
};

export default Intro;
