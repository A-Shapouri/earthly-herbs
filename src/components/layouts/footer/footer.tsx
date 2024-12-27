import React from 'react';
import Div from '@elements/div';
import Wrapper from '@layouts/wrapper';
import MazeImage from '@images-components/maze';
import Text from '@elements/text';
import TempImage from '../../../../public/images/footer/temp.png';
import Image from 'next/image';
import ApplePayIcon from '@icons-components/apple-pay';
import InstagramIcon from '@icons-components/instagram';
import TwitterIcon from '@icons-components/twitter';
import TikTokIcon from '@icons-components/tik-tok';
import VisaIcon from '@icons-components/visa';
import DiscoverIcon from '@icons-components/discover';
import MasterIcon from '@icons-components/master';
import SecurePayIcon from '@icons-components/secure-pay';
import Media from '@elements/media';
import { useParams, usePathname } from 'next/navigation';
const Footer = () => {
  const currentRoute = usePathname();
  const { lang, id } = useParams<{ lang: string, id: string }>();
  const RoutesWithoutFooter: Array<string> = [
    `/${lang}/shop`,
    `/${lang}/shop/cart`,
    `/${lang}/shop/cart/checkout`,
    `/${lang}/auth/sign-in`,
    `/${lang}/auth/sign-up`,
    `/${lang}/auth/forgot-password`,
    `/${lang}/shop/${id}`,
  ];

  if (RoutesWithoutFooter.indexOf(currentRoute) !== -1) {
    return (
      <Media greaterThan={'sm'}>
        <FooterIndex />
      </Media>);
  }

  return (
    <FooterIndex />
  );
};

const FooterIndex = () => {
  return (
    <Div className={'bg-desolace-500 w-full justify-between gap-8 md:gap-0 md:pt-28 pt-6 items-center relative flex-col'}>
      <Wrapper className={'justify-between flex-col md:flex-row px-5 gap-0 md:gap-10'}>
        <Div className={'absolute right-0 top-0 w-[250px] h-[250px] md:w-auto md:h-auto'}>
          <MazeImage />
        </Div>
        <Div className={'flex-col md:gap-4 gap-1'}>
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
        <Div className={'mt-8 md:mt-0 justify-between w-full md:w-5/12'}>
          <Div className={'flex-col md:gap-5 gap-1'}>
            <Text className={'!font-open-sauce-semi-bold md:!font-open-sauce-medium !text-[#4E614D]'} typography={['md', 'md']}>My Account</Text>
            <Div className={'flex-col md:gap-3 gap-1'}>
              <Text className={'!font-open-sauce-semi-bold md:!font-open-sauce-regular'} typography={['xs', 'xs']} type={'medium'}>My Account</Text>
              <Text className={'!font-open-sauce-semi-bold md:!font-open-sauce-regular'} typography={['xs', 'xs']} type={'medium'}>Order History</Text>
              <Text className={'!font-open-sauce-semi-bold md:!font-open-sauce-regular'} typography={['xs', 'xs']} type={'medium'}>Shoping Cart</Text>
              <Text className={'!font-open-sauce-semi-bold md:!font-open-sauce-regular'} typography={['xs', 'xs']} type={'medium'}>Wishlist</Text>
            </Div>
          </Div>
          <Div className={'flex-col md:gap-5 gap-1'}>
            <Text className={'!font-open-sauce-semi-bold md:!font-open-sauce-medium !text-[#4E614D]'} typography={['md', 'md']}>Helps</Text>
            <Div className={'flex-col md:gap-3 gap-1'}>
              <Text className={'!font-open-sauce-semi-bold md:!font-open-sauce-regular'} typography={['xs', 'xs']} type={'medium'}>Contact</Text>
              <Text className={'!font-open-sauce-semi-bold md:!font-open-sauce-regular'} typography={['xs', 'xs']} type={'medium'}>Faqs</Text>
              <Text className={'!font-open-sauce-semi-bold md:!font-open-sauce-regular'} typography={['xs', 'xs']} type={'medium'}>Terms & Condition</Text>
              <Text className={'!font-open-sauce-semi-bold md:!font-open-sauce-regular'} typography={['xs', 'xs']} type={'medium'}>Privacy Policy</Text>
            </Div>
          </Div>
          <Div className={'flex-col md:gap-5 gap-1'}>
            <Text className={'!font-open-sauce-semi-bold md:!font-open-sauce-medium !text-[#4E614D]'} typography={['md', 'md']}>Collections</Text>
            <Div className={'flex-col md:gap-3 gap-1'}>
              <Text className={'!font-open-sauce-semi-bold md:!font-open-sauce-regular'} typography={['xs', 'xs']} type={'medium'}>Night</Text>
              <Text className={'!font-open-sauce-semi-bold md:!font-open-sauce-regular'} typography={['xs', 'xs']} type={'medium'}>Tea</Text>
              <Text className={'!font-open-sauce-semi-bold md:!font-open-sauce-regular'} typography={['xs', 'xs']} type={'medium'}>Blends</Text>
              <Text className={'!font-open-sauce-semi-bold md:!font-open-sauce-regular'} typography={['xs', 'xs']} type={'medium'}>Matcha</Text>
            </Div>
          </Div>
        </Div>
        <Div className={'flex-col md:gap-5 gap-3 z-10 mt-8 md:mt-0'}>
          <Text className={'!font-open-sauce-semi-bold md:!font-open-sauce-medium !text-[#4E614D]'} typography={['md', 'md']}>Instagram</Text>
          <Div className={'flex-col gap-3'}>
            <Div className={'gap-3 justify-between'}>
              <Image alt={'instagram'} src={TempImage} />
              <Image alt={'instagram'} src={TempImage} />
              <Image alt={'instagram'} src={TempImage} />
              <Image alt={'instagram'} src={TempImage} />
            </Div>
            <Media greaterThan={'sm'}>
              <Div className={'gap-3'}>
                <Image alt={'instagram'} src={TempImage} />
                <Image alt={'instagram'} src={TempImage} />
                <Image alt={'instagram'} src={TempImage} />
                <Image alt={'instagram'} src={TempImage} />
              </Div>
            </Media>
          </Div>
        </Div>
      </Wrapper>
      <Wrapper className={'justify-between md:pb-7 pb-4 items-center flex-col md:flex-row md:px-12 md:mt-32'}>
        <Div className={'gap-14 md:gap-2'}>
          <InstagramIcon />
          <TwitterIcon />
          <TikTokIcon />
        </Div>
        <Media greaterThan={'sm'}>
          <Text type={'medium'} typography={['xs', 'xs']}>
            © 2024 Earthly Herbs, All Rights Reserved
          </Text>
        </Media>
        <Div className={'gap-2 mt-8 md:mt-0'}>
          <ApplePayIcon />
          <VisaIcon />
          <DiscoverIcon />
          <MasterIcon />
          <SecurePayIcon />
        </Div>
        <Media className={'mt-4'} lessThan={'md'}>
          <Text type={'medium'} typography={['xs', 'xs']}>
            © 2024 Earthly Herbs, All Rights Reserved
          </Text>
        </Media>
      </Wrapper>
    </Div>
  );
};

export default Footer;
