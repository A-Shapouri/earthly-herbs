import React from 'react';
import Wrapper from '@layouts/wrapper';
import Text from '@elements/text';
import Div from '@elements/div';
import PlayIcon from '@icons-components/play';

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
        <Text color={'brown'} align={'justify'} typography={['md', 'lg']}>"In a world rushing by, Earthly Herbs invites you to pause and rediscover nature's quiet wisdom. Born from Canadian fields, our premium organic teas are hand-crafted blends of earth's finest whispers—passionflower and lavender to accompany tranquil nights, yerba mate and gotu kola for vibrant days—sustainably sourced, biodegradable sachets, recyclable pouches, and designed for holistic enjoyment. Delight in flavors like elderberries and echinacea in our mixes, or ashwagandha and ginkgo for a mindful sip, each cup inviting a moment of natural harmony in your daily rhythm. Join the symphony—explore our blends today and embrace your natural glow."</Text>
        <Text color={'brown'} typography={['md', 'lg']}>– Mohammed Forghani, Founder</Text>
      </Wrapper>
    </Div>
  );
};

export default AboutEarthly;
