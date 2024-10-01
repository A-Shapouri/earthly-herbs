import Div from '@elements/div';
import Wrapper from '@layouts/wrapper';
import React from 'react';
import Image from 'next/image';
import PalomaBlendImage from '../../../../../../public/images/home/paloma-blend.png';
import GardenBlendImage from '../../../../../../public/images/home/garden-blend.png';
import Text from '@elements/text';
import CheckIcon from '@icons-components/check';
import ArrowRightIcon from '@icons-components/arrow-right';
import Button from '@elements/button';
const Blends = () => {
  return (
    <Wrapper className={'py-[120px] justify-between gap-2'}>
      <Div className={'gap-6'}>
        <Div className={'h-[400px] relative hover:-translate-y-6 hover:scale-105 transition-all duration-300'}>
          <Image src={PalomaBlendImage} alt='paloma blend' />
        </Div>
        <Div className={'h-[500px] relative hover:-translate-y-6 hover:scale-105 transition-all duration-300'}>
          <Image src={GardenBlendImage} alt='garden blend' />
        </Div>
      </Div>
      <Div className={'py-4 flex-col justify-between'}>
        <Text typography={['xxl', 'xxl']} type={'bold'}>Personalize Your Blends</Text>
        <Div className={'gap-3'}>
          <Div className={'text-white bg-primary w-6 h-6 rounded-full justify-center items-center'}>
            <CheckIcon />
          </Div>
          <Div className={'flex-col gap-2'}>
            <Text typography={['base', 'base']} type={'light'}>Healthy & natural</Text>
            <Text className={'max-w-[500px]'} color={'grey.700'} typography={['xs', 'xs']} type={'medium'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</Text>
          </Div>
        </Div>
        <Div className={'gap-3'}>
          <Div className={'text-white bg-primary w-6 h-6 rounded-full justify-center items-center'}>
            <CheckIcon />
          </Div>
          <Div className={'flex-col gap-2'}>
            <Text typography={['base', 'base']} type={'light'}>Every day fresh</Text>
            <Text className={'max-w-[500px]'} color={'grey.700'} typography={['xs', 'xs']} type={'medium'}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </Text>
          </Div>
        </Div>
        <Button startAdornment={<ArrowRightIcon />} color={'secondary'} size={'large'} className={'w-[183px]'}>
          Shop now
        </Button>
      </Div>
    </Wrapper>
  );
};

export default Blends;
