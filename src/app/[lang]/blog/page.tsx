'use client';
import Breadcrumbs from '@elements/breadcrumbs';
import Container from '@elements/container';
import Div from '@elements/div';
import Wrapper from '@layouts/wrapper';
import {useDispatch, useSelector} from "react-redux";
import RecentBlogSection from './components/recent-blog-section'
import AllBlogsSection from './components/all-blogs-section'

const Blog = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Div className={'bg-flurries-500 w-full justify-center items-center'}>
        <Wrapper className={'px-5 md:px-0'}>
          <Breadcrumbs breadcrumbsData={[{
            label: 'Blog',
          }]}/>
        </Wrapper>
      </Div>
      <Wrapper className={'px-5 md:flex-row-reverse flex-col pt-4 gap-4 pb-24 md:gap-16 md:pt-16'}>
        <Div className={'gap-14 md:gap-6 flex-col w-full'}>
          <RecentBlogSection />
          <AllBlogsSection />
        </Div>
      </Wrapper>
    </Container>
  );
};

export default Blog;
