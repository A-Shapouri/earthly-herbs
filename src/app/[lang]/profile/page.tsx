'use client';
import Breadcrumbs from '@elements/breadcrumbs';
import Container from '@elements/container';
import Div from '@elements/div';
import Wrapper from '@layouts/wrapper';
import Text from '@elements/text';
import PencilIcon from '@icons-components/pencil';
import Button from '@elements/button';
import Link from 'next/link';
import ArrowRightIcon from '@icons-components/arrow-right';
import Divider from '@elements/divider';
import routes from '@routes';
import { useSelector } from 'react-redux';
import { RootState } from '@store/root-reducer';
import classNames from '@utils/helpers/class-names';
import Logout from './logout';

const menu = [
  {
    title: 'My Orders',
    route: '/en' + routes['route.profile.orders'],
  },
  {
    title: 'Wishlist',
    route: '/en' + routes['route.profile.wish-list'],
  },
  {
    title: 'addresses',
    route: '/en' + routes['route.profile.addresses'],
  },
];

const Profile = () => {
  const { firstName, lastName, email } = useSelector((state: RootState) => state.auth);

  return (
    <Container>
      <Div className={'bg-flurries-500 w-full justify-center items-center'}>
        <Wrapper className={'px-5 md:px-0'}>
          <Breadcrumbs breadcrumbsData={[{
            label: 'Profile',
          }]} />
        </Wrapper>
      </Div>
      <Div className={'w-full py-14 max-w-[1440px]'}>
        <Div className={'rounded-lg flex-col p-4 gap-5 border border-control-100 w-full pb-0 h-fit'}>
          <Div className={'gap-1 w-full items-center justify-between'}>
            <Div className={'flex-col w-full'}>
              <Text typography={['sm', 'sm']} type={'normal'}>{firstName} {lastName}</Text>
              <Text color={'grey.700'} typography={['xs', 'xs']} type={'medium'}>{email}</Text>
            </Div>
            <Button shape={'square'} startAdornment={<PencilIcon />} variant={'text'} />
          </Div>
          <Div className={'flex-col w-full'}>
            {menu.map((item, index) => (
              <Div key={`menu_${index}`} className={'w-full flex-col'}>
                <Link href={item.route} className={'flex justify-between items-center py-4 cursor-pointer'}>
                  <Text color={'black'} typography={['sm', 'sm']} type={'normal'}>{item.title}</Text>
                  <Button className={classNames('!text-black')} startAdornment={<ArrowRightIcon />} shape={'square'} variant={'text'} />
                </Link>
                <Divider color={'control'} />
              </Div>
            ))}
            <Logout />
          </Div>
        </Div>
      </Div>
    </Container>
  );
};

export default Profile;
