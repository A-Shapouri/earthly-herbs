import Wrapper from '@layouts/wrapper';
import React from 'react';
import Div from '@elements/div';
import Text from '@elements/text';
import Button from '@elements/button';
import Media from '@elements/media';
import ArrowRightIcon from '@icons-components/arrow-right';
import ArticleItem from './sub-components/article-item';
import getParseRoute from '@utils/helpers/parse-route';
import routes from '@routes';
import { getRecentBlogPosts } from '../../../../../data/blogs';

const Articles = () => {
  const recentPosts = getRecentBlogPosts(3);

  return (
    <Div className={'bg-flurries-500 w-full justify-center items-center px-5'}>
      <Wrapper className={'flex-col md:py-20 py-6 md:gap-10 gap-6'}>
        <Div className={'items-center justify-between'}>
          <Text typography={['xxl', 'xxl']} type={'bold'}>Latest Articles</Text>
          <Media greaterThan={'sm'}>
            <Button href={getParseRoute({ pathname: routes['route.blog.index'], locale: 'en' })} size={'large'} className={'w-44'} startAdornment={<ArrowRightIcon />}>
              Our blog
            </Button>
          </Media>
          <Media lessThan={'md'}>
            <Button href={getParseRoute({ pathname: routes['route.blog.index'], locale: 'en' })} size={'large'} variant={'text'} startAdornment={<ArrowRightIcon />}>
              Our blog
            </Button>
          </Media>
        </Div>
        <Div className={'gap-6 flex-col md:flex-row'}>
          {recentPosts.map((post) => (
            <ArticleItem
              key={post.id}
              id={post.id}
              day={post.day}
              month={post.month}
              title={post.title}
              image={post.image}
              description={post.description}
            />
          ))}
        </Div>
      </Wrapper>
    </Div>
  );
};

export default Articles;
