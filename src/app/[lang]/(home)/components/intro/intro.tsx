import React from 'react';
import Wrapper from '@layouts/wrapper';
import Text from '@elements/text';
import Div from '@elements/div';
import Button from '@elements/button';
import Chip from '@elements/chip';
import FlowerOneImage from '@images-components/flower_one';
import ArrowRightIcon from '@icons-components/arrow-right';
import Services from './sub-components/services';

const Intro = () => {
  return (
    <Div className={'bg-flurries-500 w-full justify-center items-center'}>
      <Wrapper className={'flex-row bg-[url("/images/home/day-symphony.png")] bg-no-repeat bg-center bg-[length:532px_532px] justify-between z-10'}>
        <Div className={'absolute bottom-0 left-0'}>
          <FlowerOneImage />
        </Div>
        <Div className={'flex-col gap-7 my-32'}>
          <Text type={'black'} typography={['huge', 'huge']}>Fresh & Healthy<br /> Organic Tea</Text>
          <Div className={'gap-3'}>
            <Div className={'w-0.5 h-16 bg-brown rounded-full'} />
            <Div className={'flex-col gap-2'}>
              <Div className={'gap-2'}>
                <Text>Sale up to</Text>
                <Chip color={'brown'} rounded={'small'} value={'30% OFF'} />
              </Div>
              <Text type={'medium'} color={'brown'} typography={['xs', 'xs']}>Free shipping on all your order.</Text>
            </Div>
          </Div>
          <Button startAdornment={<ArrowRightIcon />} color={'secondary'} rounded={'full'} size={'large'} className={'w-[183px]'}>
            Shop now
          </Button>
        </Div>
        <Services />
      </Wrapper>
    </Div>
  );
};

export default Intro;
