'use client';
import React, {useState} from 'react';
import Div from '@elements/div';
import Text from '@elements/text';
import PhoneIcon from '@icons-components/phone';
import LocationIcon from '@icons-components/location';
import Image from 'next/image';
import Button from '@elements/button';
import Link from 'next/link';
import TextField from '@elements/text-field';
import Badge from '@elements/badge';
import CartIcon from '@icons-components/cart';
import ProfileIcon from '@icons-components/profile';
import AppBar from '@elements/app-bar';
import routes from '@routes';
import getParseRoute from '@utils/helpers/parse-route';
import {useParams, usePathname} from 'next/navigation';
import {DictionariesTypes} from '@dictionaries';
import classNames from '@utils/helpers/class-names';
import Select from '@elements/select';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@store/root-reducer';
import {useRouter} from 'next-nprogress-bar';
import {ShopActions} from '@store/shop/shop-actions';

const DesktopHeader = () => {
  const {lang} = useParams<{ lang: DictionariesTypes }>();
  const dispatch = useDispatch();
  const pathname = usePathname();
  const [locale, setLocale] = useState(lang);
  const router = useRouter();

  const {cart, currency} = useSelector((state: RootState) => state.shop);
  const {isLoggedIn} = useSelector((state: RootState) => state.auth);

  const handleCart = () => {
    router.push(getParseRoute({pathname: routes['route.shop.cart'], locale: lang}));
  };

  const handleNewCurrency = (newValue: 'CAD' | 'USD') => {
    dispatch(ShopActions.setCurrency({currency: newValue}));
  };

  const handleProfile = () => {
    if (isLoggedIn) {
      router.push(getParseRoute({pathname: routes['route.profile.index'], locale: lang}));
    } else {
      router.push(getParseRoute({pathname: '/auth/sign-in', locale: lang}));
    }
  }
  return (
    <AppBar position={'sticky'} className={'flex-col items-center justify-center'}>
      <Div className={'w-full flex-col justify-center h-32 transition-all duration-300'}>
        <Div className={'bg-flurries w-full h-12 justify-center items-center'}>
          <Div className={'w-full max-w-[1440px] items-center justify-between'}>
            <Div className={'gap-2 items-center'}>
              <Div className={'w-4 h-4 items-center justify-center'}>
                <LocationIcon/>
              </Div>
              <Text color={'brown'} type={'medium'} typography={['xxs', 'xxs']}>Store Location: 156 king St, York, ON,
                M9N 1L5, Toronto, Canada</Text>
            </Div>
            <Div className={'gap-[72px] items-center'}>
              <Div className={'gap-2'}>
                <Div className={'w-4 h-4 justify-center items-center'}>
                  <PhoneIcon/>
                </Div>
                <Text type={'normal'} color={'brown'} typography={['xxs', 'xxs']}>437-833-3379</Text>
              </Div>
              <Div className={'gap-1 w-40'}>
                <Select
                  variant='text'
                  size={'small'}
                  rounded={'small'}
                  id={'id'}
                  text={'value'}
                  onChange={(newValue) => setLocale(newValue)}
                  value={locale}
                  optionsList={[
                    {id: 'en', value: 'Eng'},
                    {id: 'fr', value: 'Fre'}]}
                />
                <Select
                  variant='text'
                  size={'small'}
                  rounded={'small'}
                  id={'id'}
                  text={'value'}
                  onChange={(newValue) => handleNewCurrency(newValue)}
                  value={currency}
                  optionsList={[
                    {id: 'USD', value: 'USD'},
                    {id: 'CAD', value: 'CAD'}]}
                />
              </Div>
            </Div>
          </Div>
        </Div>
        <Div className={'w-full bg-white h-20 justify-center items-center border-b border-b-flurries shadow'}>
          <Div className={'w-full max-w-[1440px] items-center justify-between'}>
            <Link href={getParseRoute({pathname: routes['route.home.index'], locale: lang})}
                  className={'relative w-[300px] h-10'}>
              <Image quality={100} fill={true} alt={'earthly logo'} src={'/images/earthly-logo-desktop.png'}/>
            </Link>
            <Div className={'items-center justify-center gap-7'}>
              <Link
                className={classNames('font-open-sauce-medium text-d-xs transition-colors duration-500',
                  pathname === `/${lang}` ? 'text-black' : 'text-grey-700'
                )}
                href={getParseRoute({pathname: routes['route.home.index'], locale: lang})}>
                Home
              </Link>
              <Link
                className={classNames('font-open-sauce-medium text-d-xs transition-colors duration-500',
                  pathname === `/${lang}${routes['route.shop.index']}` ? 'text-black' : 'text-grey-700'
                )}
                href={getParseRoute({pathname: routes['route.shop.index'], locale: lang})}>
                Shop
              </Link>
              <Link className={'font-open-sauce-medium text-d-xs text-grey-700'} href={'#'}>
                Collections
              </Link>
              <Link
                href={getParseRoute({pathname: routes['route.blog.index'], locale: lang})}
                className={classNames('font-open-sauce-medium text-d-xs transition-colors duration-500',
                  pathname === `/${lang}${routes['route.blog.index']}` ? 'text-black' : 'text-grey-700'
                )}
              >
                Blog
              </Link>
              <Link className={'font-open-sauce-medium text-d-xs text-grey-700'} href={'#'}>
                About Us
              </Link>
            </Div>
            <Div className={'items-center gap-5'}>
              <TextField inputClassName='pr-[104px]' size='small' rounded='full' className='w-[334px]'
                         endAdornment={<Button className='w-24' size={'small'} rounded='full'>Search</Button>}
                         placeholder='Search product name, ...'/>
              {cart.length ? (
                <Badge color='primary' size='xs' variant='standard' badgeContent={cart.length}>
                  <Button onClick={handleCart}
                          className={'!text-black hover:!text-control-500 active:!text-control-700'} iconSize={'large'}
                          startAdornment={<CartIcon/>} variant='text' size='small' shape='square' color='primary'/>
                </Badge>
              ) : (
                <Button className={'!text-black hover:!text-control-500 active:!text-control-700'} iconSize={'large'}
                        startAdornment={<CartIcon/>} variant='text' size='small' shape='square' color='primary'/>
              )}
              <Button
                onClick={handleProfile}
                className={'!text-black hover:!text-control-500 active:!text-control-700'}
                iconSize={'large'}
                startAdornment={<ProfileIcon/>}
                variant='text'
                size='small'
                shape='square'
                color='primary'
              />
            </Div>
          </Div>
        </Div>
      </Div>
    </AppBar>
  );
};

export default DesktopHeader;

