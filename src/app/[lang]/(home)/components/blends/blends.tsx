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
import Media from '@elements/media';
import getParseRoute from '@utils/helpers/parse-route';
import routes from '@routes';

const Blends = () => {
  return (
    <Wrapper className={'md:py-[120px] pt-8 pb-6 justify-between gap-2 flex-col-reverse md:flex-row px-5 gap-6'}>
      <Div className={'gap-6'}>
        <Div className={'relative md:hover:-translate-y-6 hover:scale-105 transition-all duration-300 pb-12'}>
          <Image src={PalomaBlendImage} alt='paloma blend' />
        </Div>
        <Div className={'relative md:hover:-translate-y-6 hover:scale-105 transition-all duration-300'}>
          <Image src={GardenBlendImage} alt='garden blend' />
        </Div>
      </Div>
      <Div className={'py-4 flex-col justify-between'}>
        <Text typography={['xl', 'xl']} type={'bold'}>Craving a tea that's uniquely yours?</Text>
        <Div className={'gap-3 mt-7'}>
          <Div className={'text-white bg-primary w-6 h-6 min-h-6 min-w-6 rounded-full justify-center items-center'}>
            <CheckIcon />
          </Div>
          <Div className={'flex-col gap-2'}>
            <Text typography={['base', 'base']} type={'light'}>Healthy & natural</Text>
            <Text className={'max-w-[500px]'} color={'grey.700'} typography={['xs', 'xs']} type={'medium'}>Soon, craft your perfect organic blend—answer our quick questionnaire on your goals like deeper sleep, sharper focus, or balanced detox, and we'll hand-blend nature's finest into your personal symphony.</Text>
          </Div>
        </Div>
        <Div className={'gap-3 mt-5'}>
          <Div className={'text-white bg-primary w-6 h-6 min-h-6 min-w-6 rounded-full justify-center items-center'}>
            <CheckIcon />
          </Div>
          <Div className={'flex-col gap-2'}>
            <Text typography={['base', 'base']} type={'light'}>Every day fresh</Text>
            <Text className={'max-w-[500px]'} color={'grey.700'} typography={['xs', 'xs']} type={'medium'}>
              Experience tailored wellness: 100% organic, sustainable, and plastic-free—delivered with the quiet wisdom of Canadian fields, boosting your daily rhythm without guesswork.
              Sign up below for email alerts and be the first to personalize—plus snag an exclusive 15% off launch code.
            </Text>
          </Div>
        </Div>
        <Media greaterThan={'sm'}>
          <Button
            href={getParseRoute({ pathname: routes['route.products.index'], locale: 'en' })}
            startAdornment={<ArrowRightIcon />} color={'secondary'} size={'large'} className={'w-[183px]'}>
            Shop now
          </Button>
        </Media>
      </Div>
    </Wrapper>
  );
};

export default Blends;
