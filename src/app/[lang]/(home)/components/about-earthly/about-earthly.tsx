import React from 'react';
import Wrapper from '@layouts/wrapper';
import Text from '@elements/text';
import Div from '@elements/div';
import PlayIcon from '@icons-components/play';
import FlowerFourImage from '@images-components/flower-four';


const AboutEarthly = () => {
  return (
    <Div className={'flex-col w-full'}>
      <Div className={'bg-flurries-500 w-full relative justify-center items-center'}>
        <Div className={'absolute bottom-0 left-[100px]'}>
          <FlowerFourImage />
        </Div>
        <Wrapper className={'gap-6 flex-col pt-32 pb-[450px] relative'}>
          <Div className={'h-[740px] w-full top-[310px] flex-col text-white gap-20 bg-black rounded-2xl justify-center items-center absolute z-10'}>
            <Text typography={['md', 'md']} color={'white'} type={'medium'}>VIDEO</Text>
            <PlayIcon />
          </Div>
          <Text type={'bold'} typography={['xxl', 'xxl']}>About Earthly herbs</Text>
          <Text color={'primary'} type={'bold'} typography={['xl', 'xl']}>Reconnecting Humanity with Nature's Beauty and Love</Text>
        </Wrapper>
      </Div>
      <Wrapper className={'flex-col gap-6 pt-[450px] pb-20'}>
        <Text color={'brown'} align={'justify'} typography={['lg', 'lg']}>"Agha Joon's Garden, a cherished retreat from my childhood, remains etched in my memory as a sanctuary of peace and natural wonder. The symphony of the night, orchestrated by the gentle flow of water, the chorus of crickets, and the passionate solo of a frog, awakened my senses to the beauty of nature. This experience ignited a deep reverence for the earth's gifts, inspiring me to cultivate a herbal tea brand that honors its essence. With each sip, I seek to evoke the same sense of tranquility and connection to nature that I found in Agha Joon's Garden, nurturing both body and soul."</Text>
        <Text color={'brown'} typography={['lg', 'lg']}>– Mohammed Forghani, Founder</Text>
      </Wrapper>
    </Div>
  );
};

export default AboutEarthly;
