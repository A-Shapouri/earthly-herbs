import Wrapper from '@layouts/wrapper';
import React from 'react';
import Div from '@elements/div';
import Text from '@elements/text';
import Button from '@elements/button';
import Media from '@elements/media'
import ArrowRightIcon from '@icons-components/arrow-right';
import ArticleItem from './sub-components/article-item';
import NatureImage from '../../../../../../public/images/articles/nature.png';
import FieldImage from '../../../../../../public/images/articles/field.png';
import GreenTeaImage from '../../../../../../public/images/articles/green-tea.png';
const Articles = () => {
  return (
    <Div className={'bg-flurries-500 w-full justify-center items-center px-5'}>
      <Wrapper className={'flex-col md:py-20 py-6 md:gap-10 gap-6'}>
        <Div className={'items-center justify-between'}>
          <Text typography={['xxl', 'xxl']} type={'bold'}>Latest Articles</Text>
          <Media greaterThan={'sm'}>
            <Button size={'large'} className={'w-44'} startAdornment={<ArrowRightIcon />}>
              Our blog
            </Button>
          </Media>
          <Media lessThan={'md'}>
            <Button size={'large'} variant={'text'} startAdornment={<ArrowRightIcon />}>
              Our blog
            </Button>
          </Media>
        </Div>
        <Div className={'gap-6 flex-col md:flex-row'}>
          <ArticleItem
            day={'23'}
            month={'JAN'}
            title={'Best Teas for Energy: Natural Boosts to Power Up Your Da'}
            image={NatureImage}
            description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type'}
          />
          <ArticleItem
            day={'13'}
            month={'FEB'}
            title={'Best Teas for Energy: Natural Boosts to Power Up Your Da'}
            image={FieldImage}
            description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type'}
          />
          <ArticleItem
            day={'06'}
            month={'NOV'}
            title={'Best Teas for Energy: Natural Boosts to Power Up Your Da'}
            image={GreenTeaImage}
            description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type'}
          />
        </Div>
      </Wrapper>
    </Div>
  );
};

export default Articles;
