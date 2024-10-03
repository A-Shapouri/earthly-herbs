import React from 'react';
import Wrapper from '@layouts/wrapper';
import Text from '@elements/text';
import Div from '@elements/div';
import PlayIcon from '@icons-components/play';
import FlowerFourImage from '@images-components/flower-four';


const AboutEarthly = () => {
  return (
    <Div className={'flex-col w-full'}>
      <Div className={'bg-flurries-500 w-full relative justify-center items-center px-5'}>
        {/* <Div className={'absolute bottom-0 left-[100px]'}>
          <FlowerFourImage />
        </Div> */}
        <Wrapper className={'md:gap-6 gap-3 flex-col md:pt-32 pt-8 md:pb-[450px] pb-40 relative'}>
          <Div className={'md:h-[740px] w-full md:top-[310px] top-[153px] pb-10 pt-6 mt-4 flex-col text-white md:gap-20 bg-black rounded-2xl justify-center items-center absolute z-10'}>
            <Text typography={['md', 'md']} color={'white'} type={'medium'}>VIDEO</Text>
            <Text className={'w-[265px] md:w-[490px] mt-1'} align={'center'} color={'white'} typography={['xl', 'xl']} type={'bold'}>Lorem Ipsum is simply dummy text of the printing</Text>
            <Div className={'h-10 w-10 mt-6'}>
              <PlayIcon />
            </Div>
          </Div>
          <Text type={'bold'} typography={['xxl', 'xxl']}>About Earthly herbs</Text>
          <Text color={'primary'} type={'bold'} typography={['lg', 'xl']}>Reconnecting Humanity with Nature's Beauty and Love</Text>
        </Wrapper>
      </Div>
      <Wrapper className={'flex-col md:gap-6 gap-5 md:pt-[450px] pt-[122px] md:pb-20 pb-5 px-5'}>
        <Text color={'brown'} align={'justify'} typography={['md', 'lg']}>"Agha Joon's Garden, a cherished retreat from my childhood, remains etched in my memory as a sanctuary of peace and natural wonder. The symphony of the night, orchestrated by the gentle flow of water, the chorus of crickets, and the passionate solo of a frog, awakened my senses to the beauty of nature. This experience ignited a deep reverence for the earth's gifts, inspiring me to cultivate a herbal tea brand that honors its essence. With each sip, I seek to evoke the same sense of tranquility and connection to nature that I found in Agha Joon's Garden, nurturing both body and soul."</Text>
        <Text color={'brown'} typography={['md', 'lg']}>– Mohammed Forghani, Founder</Text>
      </Wrapper>
    </Div>
  );
};

export default AboutEarthly;
