import React from 'react'
import Div from '@elements/div'
import Text from "@elements/text";
import BlogItem from '../blog-item'
import NatureImage from "../../../../../../public/images/articles/nature.png";
import FieldImage from "../../../../../../public/images/articles/field.png";
import GreenTeaImage from "../../../../../../public/images/articles/green-tea.png";

const AllBlogsSection = () => {


  return (
    <Div className={'flex-col md:gap-14 gap-6'}>
      <Text typography={['xl', 'xl']} type={'black'}>All blog posts</Text>
      <Div className={'grid md:grid-cols-3 grid-cols-1 gap-y-14 gap-x-8'}>
        <BlogItem
          day={'23'}
          month={'JAN'}
          title={'Lorem ipsum dolor'}
          image={FieldImage}
          description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
          tags={['Blog Tag', 'Blog Tag']}
        />
        <BlogItem
          day={'23'}
          month={'JAN'}
          title={'Lorem ipsum dolor'}
          image={GreenTeaImage}
          description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
          tags={['Blog Tag', 'Blog Tag']}
        />
        <BlogItem
          day={'23'}
          month={'JAN'}
          title={'Lorem ipsum dolor'}
          image={NatureImage}
          description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
          tags={['Blog Tag', 'Blog Tag']}
        />
        <BlogItem
          day={'23'}
          month={'JAN'}
          title={'Lorem ipsum dolor'}
          image={FieldImage}
          description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
          tags={['Blog Tag', 'Blog Tag']}
        />
        <BlogItem
          day={'23'}
          month={'JAN'}
          title={'Lorem ipsum dolor'}
          image={GreenTeaImage}
          description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
          tags={['Blog Tag', 'Blog Tag']}
        />
        <BlogItem
          day={'23'}
          month={'JAN'}
          title={'Lorem ipsum dolor'}
          image={NatureImage}
          description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
          tags={['Blog Tag', 'Blog Tag']}
        />
        <BlogItem
          day={'23'}
          month={'JAN'}
          title={'Lorem ipsum dolor'}
          image={FieldImage}
          description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
          tags={['Blog Tag', 'Blog Tag']}
        />
        <BlogItem
          day={'23'}
          month={'JAN'}
          title={'Lorem ipsum dolor'}
          image={GreenTeaImage}
          description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
          tags={['Blog Tag', 'Blog Tag']}
        />
        <BlogItem
          day={'23'}
          month={'JAN'}
          title={'Lorem ipsum dolor'}
          image={NatureImage}
          description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
          tags={['Blog Tag', 'Blog Tag']}
        />
      </Div>
    </Div>
  )
}

export default AllBlogsSection;