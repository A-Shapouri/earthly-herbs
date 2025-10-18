import React from 'react';
import Div from '@elements/div';
import Wrapper from '@layouts/wrapper';
import MazeImage from '@images-components/maze';
import Text from '@elements/text';
import Button from '@elements/button';
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
import getParseRoute from '@utils/helpers/parse-route';
import routes from '@routes';
import Media from '@elements/media';
import { useParams, usePathname } from 'next/navigation';
import { Languages } from '@types';
import { RootState } from '@store/root-reducer';
import { useSelector } from 'react-redux';

const Footer = () => {
  const currentRoute = usePathname();
  const { lang, id } = useParams<{ lang: string, id: string }>();
  const RoutesWithoutFooterMobile: Array<string> = [
    `/${lang}/products`,
    `/${lang}/products/cart`,
    `/${lang}/products/cart/checkout`,
    `/${lang}/auth/sign-in`,
    `/${lang}/auth/sign-up`,
    `/${lang}/auth/forgot-password`,
    `/${lang}/products/${id}`,
    `/${lang}/survey`,
    `/${lang}/profile`,
    `/${lang}/profile/orders`,
    `/${lang}/profile/orders/${id}`,
    `/${lang}/profile/wish-list`,
  ];

  const RoutesWithoutFooter: Array<string> = [
    `/${lang}/survey`,
  ];

  if (RoutesWithoutFooter.indexOf(currentRoute) !== -1) {
    return null;
  }

  if (RoutesWithoutFooterMobile.indexOf(currentRoute) !== -1) {
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
  const { lang } = useParams<{ lang: Languages, id: string }>();
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);

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
            9563 Warden Ave, Markham, Ontario, Canada, L6C 1M5
          </Text>
          <Div className={'gap-4 items-center'}>
            <Text typography={['xs', 'xs']}>Info@earthlyherbs.ca</Text>
          </Div>
        </Div>
        <Div className={'mt-8 md:mt-0 justify-between w-full md:w-5/12'}>
          <Div className={'flex-col md:gap-2 gap-1'}>
            <Text className={'!font-open-sauce-semi-bold md:!font-open-sauce-medium !text-[#4E614D]'} typography={['md', 'md']}>My Account</Text>
            <Div className={'flex-col px-0.5'}>
              <Button href={getParseRoute({ pathname: isLoggedIn ? routes['route.profile.index'] : routes['route.auth.sign-in'], locale: lang })} variant='text' className='!p-0 !justify-end' size='small'>
                <Text typography={['xs', 'xs']} type={'medium'}>My Account</Text>
              </Button>
              <Button href={getParseRoute({ pathname: isLoggedIn ? routes['route.profile.orders'] : routes['route.auth.sign-in'], locale: lang })} variant='text' className='!p-0 !justify-end' size='small'>
                <Text typography={['xs', 'xs']} type={'medium'}>Order History</Text>
              </Button>
              <Button href={getParseRoute({ pathname: isLoggedIn ? routes['route.products.cart'] : routes['route.auth.sign-in'], locale: lang })} variant='text' className='!p-0 !justify-end' size='small'>
                <Text typography={['xs', 'xs']} type={'medium'}>Shoping Cart</Text>
              </Button>
            </Div>
          </Div>
          <Div className={'flex-col md:gap-2 gap-1'}>
            <Text className={'!font-open-sauce-semi-bold md:!font-open-sauce-medium !text-[#4E614D]'} typography={['md', 'md']}>Helps</Text>
            <Div className={'flex-col px-0.5'}>
              <Button variant='text' className='!p-0 !justify-end' size='small'>
                <Text typography={['xs', 'xs']} type={'medium'}>Contact Us</Text>
              </Button>
              <Button href={getParseRoute({ pathname: routes['route.faq.index'], locale: lang })} variant='text' className='!p-0 !justify-end' size='small'>
                <Text typography={['xs', 'xs']} type={'medium'}>Faqs</Text>
              </Button>
              <Button href={getParseRoute({ pathname: routes['route.terms.index'], locale: lang })} variant='text' className='!p-0 !justify-end' size='small'>
                <Text typography={['xs', 'xs']} type={'medium'}>Terms & Condition</Text>
              </Button>
            </Div>
          </Div>
          <Div className={'flex-col md:gap-2 gap-1'}>
            <Text className={'!font-open-sauce-semi-bold md:!font-open-sauce-medium !text-[#4E614D]'} typography={['md', 'md']}>Collections</Text>
            <Div className={'flex-col px-0.5'}>
              <Button variant='text' className='!p-0 !justify-end' size='small'>
                <Text typography={['xs', 'xs']} type={'medium'}>Sleep (Night symphony, Ginger Glow)</Text>
              </Button>
              <Button variant='text' className='!p-0 !justify-end' size='small'>
                <Text typography={['xs', 'xs']} type={'medium'}>Energize (Day Symphony, Radiant Mind)</Text>
              </Button>
              <Button variant='text' className='!p-0 !justify-end' size='small'>
                <Text typography={['xs', 'xs']} type={'medium'}>Support (Winter Warrior, Vital Remedy)</Text>
              </Button>
              <Button variant='text' className='!p-0 !justify-end' size='small'>
                <Text typography={['xs', 'xs']} type={'medium'}>Balance (Rhythm of life)</Text>
              </Button>
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
