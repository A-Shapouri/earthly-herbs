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
import routes from '@routes'

const menu = [
  {
    title: 'My Orders',
    route: '/en' + routes['route.profile.orders'],
  },
  {
    title: 'Wishlist',
    route: '/en' + routes['route.profile.wish-list'],
  },
];

const Profile = () => {
  return (
    <Container>
      <Div className={'bg-flurries-500 w-full justify-center items-center'}>
        <Wrapper className={'px-5 md:px-0'}>
          <Breadcrumbs breadcrumbsData={[{
            label: 'Profile',
          }]}/>
        </Wrapper>
      </Div>
      <Wrapper className={'px-5 flex-col pt-10 gap-5 pb-24'}>
        <Div className={'gap-1 w-full items-center justify-between'}>
          <Div className={'flex-col w-full'}>
            <Text typography={['lg', 'lg']} type={'normal'}>Ali Refahi</Text>
            <Text color={'grey.700'} typography={['md', 'md']} type={'medium'}>refahi@gmail.com</Text>
          </Div>
          <Button shape={'square'} startAdornment={<PencilIcon/>} variant={'text'}/>
        </Div>
        <Div className={'flex-col w-full'}>
          {menu.map((item, index) => (
            <Div key={`menu_${index}`} className={'w-full flex-col'}>
              <Link href={item.route} className={'flex justify-between items-center py-4'}>
                <Text typography={['lg', 'lg']} type={'normal'}>{item.title}</Text>
                <Button className={'!text-black'} startAdornment={<ArrowRightIcon/>} shape={'square'} variant={'text'}/>
              </Link>
              <Divider color={'control'} />
            </Div>
          ))}
        </Div>
      </Wrapper>
    </Container>
  );
};

export default Profile;
