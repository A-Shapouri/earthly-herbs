'use client';
import Breadcrumbs from '@elements/breadcrumbs';
import Container from '@elements/container';
import Div from '@elements/div';
import Text from '@elements/text';
import Wrapper from '@layouts/wrapper';
import {useDispatch} from "react-redux";
import {useParams} from "next/navigation";
import getParseRoute from "@utils/helpers/parse-route";
import routes from "@routes";
import Image from "next/image";
import FieldImage from "../../../../../public/images/articles/nature.png";
import React from "react";

const BlogDetails = () => {
  const dispatch = useDispatch();
  const {id} = useParams<{ id: string }>();
  console.log(id.toString());

  return (
    <Container>
      <Div className={'bg-flurries-500 w-full justify-center items-center'}>
        <Wrapper className={'px-5 md:px-0'}>
          <Breadcrumbs breadcrumbsData={[{
            label: 'Blog',
            path: getParseRoute({pathname: routes['route.blog.index'], locale: 'en'})
          }, {
            label: decodeURIComponent(id),
          }]}/>
        </Wrapper>
      </Div>
      <Wrapper className={'px-5 md:flex-row-reverse flex-col pt-8 gap-4 md:pb-24 pb-8 md:gap-16 md:pt-16'}>
        <Div className={'md:gap-16 gap-6 flex-col w-full'}>
          <Text type={'black'} typography={['xl', 'xl']}>{decodeURIComponent(id)}</Text>
          <Div className={'w-full sm:h-[320px] h-[160px] relative rounded-xl'}>
            <Image src={FieldImage} alt={id} className={'object-fill rounded-xl'} fill={true}/>
          </Div>
          <Div className={'w-full flex-col gap-6'}>
            <Div className={'flex-col gap-3'}>
              <Text typography={['lg', 'lg']} type={'bold'}>Lorem ipsum dolor</Text>
              <Text color={'grey.700'} typography={['sm', 'sm']} type={'medium'}>Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.</Text>
              <Text color={'grey.700'} typography={['sm', 'sm']} type={'medium'}>Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.</Text>
            </Div>
            <Div className={'flex-col gap-3'}>
              <Text typography={['lg', 'lg']} type={'bold'}>Lorem ipsum dolor</Text>
              <Text color={'grey.700'} typography={['sm', 'sm']} type={'medium'}>Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.</Text>
            </Div>
            <Div className={'flex-col gap-3'}>
              <Text typography={['lg', 'lg']} type={'bold'}>Lorem ipsum dolor</Text>
              <Text color={'grey.700'} typography={['sm', 'sm']} type={'medium'}>Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.</Text>
            </Div>
            <Div className={'flex-col gap-3'}>
              <Text typography={['lg', 'lg']} type={'bold'}>Lorem ipsum dolor</Text>
              <Text color={'grey.700'} typography={['sm', 'sm']} type={'medium'}>Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.</Text>
            </Div>
            <Div className={'flex-col gap-3'}>
              <Text typography={['lg', 'lg']} type={'bold'}>Lorem ipsum dolor</Text>
              <Text color={'grey.700'} typography={['sm', 'sm']} type={'medium'}>Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.</Text>
            </Div>
            <Div className={'gap-2'}>
              <Div className={'h-8 px-4 rounded-full bg-flurries items-center justify-center'}>
                <Text type={'bold'} typography={['xs', 'xs']}>Blog Tag</Text>
              </Div>
              <Div className={'h-8 px-4 rounded-full bg-flurries items-center justify-center'}>
                <Text type={'bold'} typography={['xs', 'xs']}>Blog Tag</Text>
              </Div>
              <Div className={'h-8 px-4 rounded-full bg-flurries items-center justify-center'}>
                <Text type={'bold'} typography={['xs', 'xs']}>Blog Tag</Text>
              </Div>
            </Div>
          </Div>
        </Div>
      </Wrapper>
    </Container>
  );
};

export default BlogDetails;
