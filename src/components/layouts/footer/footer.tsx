import React from 'react';
import Div from '@elements/div'
import Wrapper from '@layouts/wrapper'
import MazeImage from '@images-components/maze';
import Text from '@elements/text'
import TempImage from '../../../../public/images/footer/temp.png'
import Image from 'next/image'
import ApplePayIcon from '@icons-components/apple-pay';
import InstagramIcon from '@icons-components/instagram';
import TwitterIcon from '@icons-components/twitter';
import TikTokIcon from '@icons-components/tik-tok';
import VisaIcon from '@icons-components/visa';
import DiscoverIcon from '@icons-components/discover';
import MasterIcon from '@icons-components/master';
import SecurePayIcon from '@icons-components/secure-pay';
const Footer = () => {
  return (
    <Div className={'bg-desolace-500 w-full h-[486px] justify-between pt-28 items-center relative flex-col'}>
      <Wrapper className={'justify-between'}>
        <Div className={'absolute right-0 top-0'}>
          <MazeImage />
        </Div>
        <Div className={'flex-col gap-4'}>
          <Text typography={['md', 'md']} className={'text-[#4E614D]'}>About Earthly Herbs</Text>
          <Text
            typography={['xs', 'xs']}
            type={'medium'}
            className={'w-[336px]'}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          </Text>
          <Div className={'gap-4 items-center'}>
            <Text typography={['xs', 'xs']}>437-833-3379</Text>
            <Text type={'medium'} typography={['sm', 'sm']}>or</Text>
            <Text typography={['xs', 'xs']}>156 king St, York, ON, M9N 1L5</Text>
          </Div>
        </Div>
        <Div className={'flex-col gap-5'}>
          <Text typography={['md', 'md']} className={'text-[#4E614D]'}>My Account</Text>
          <Div className={'flex-col gap-3'}>
            <Text typography={['xs', 'xs']} type={'medium'}>My Account</Text>
            <Text typography={['xs', 'xs']} type={'medium'}>Order History</Text>
            <Text typography={['xs', 'xs']} type={'medium'}>Shoping Cart</Text>
            <Text typography={['xs', 'xs']} type={'medium'}>Wishlist</Text>
          </Div>
        </Div>
        <Div className={'flex-col gap-5'}>
          <Text typography={['md', 'md']} className={'text-[#4E614D]'}>Helps</Text>
          <Div className={'flex-col gap-3'}>
            <Text typography={['xs', 'xs']} type={'medium'}>Contact</Text>
            <Text typography={['xs', 'xs']} type={'medium'}>Faqs</Text>
            <Text typography={['xs', 'xs']} type={'medium'}>Terms & Condition</Text>
            <Text typography={['xs', 'xs']} type={'medium'}>Privacy Policy</Text>
          </Div>
        </Div>
        <Div className={'flex-col gap-5'}>
          <Text typography={['md', 'md']} className={'text-[#4E614D]'}>Collections</Text>
          <Div className={'flex-col gap-3'}>
            <Text typography={['xs', 'xs']} type={'medium'}>Night</Text>
            <Text typography={['xs', 'xs']} type={'medium'}>Tea</Text>
            <Text typography={['xs', 'xs']} type={'medium'}>Blends</Text>
            <Text typography={['xs', 'xs']} type={'medium'}>Matcha</Text>
          </Div>
        </Div>
        <Div className={'flex-col gap-5 z-10 '}>
          <Text typography={['md', 'md']} className={'text-[#4E614D]'}>Instagram</Text>
          <Div className={'flex-col gap-3'}>
            <Div className={'gap-3'}>
              <Image alt={'instagram'} src={TempImage} />
              <Image alt={'instagram'} src={TempImage} />
              <Image alt={'instagram'} src={TempImage} />
              <Image alt={'instagram'} src={TempImage} />
            </Div>
            <Div className={'gap-3'}>
              <Image alt={'instagram'} src={TempImage} />
              <Image alt={'instagram'} src={TempImage} />
              <Image alt={'instagram'} src={TempImage} />
              <Image alt={'instagram'} src={TempImage} />
            </Div>
          </Div>
        </Div>
      </Wrapper>
      <Wrapper className={'justify-between pb-7 items-center'}>
        <Div className={'gap-2'}>
          <InstagramIcon />
          <TwitterIcon />
          <TikTokIcon />
        </Div>
        <Text type={'medium'} typography={['xs', 'xs']}>
          © 2024 Earthly Herbs, All Rights Reserved
        </Text>
        <Div className={'gap-2'}>
          <ApplePayIcon />
          <VisaIcon />
          <DiscoverIcon />
          <MasterIcon />
          <SecurePayIcon />
        </Div>
      </Wrapper>
    </Div>
  );
};

export default Footer;
