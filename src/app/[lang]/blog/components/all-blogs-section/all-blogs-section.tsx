import React from 'react'
import Div from '@elements/div'
import Text from "@elements/text";
import BlogItem from '../blog-item'
import NatureImage from "../../../../../../public/images/articles/nature.png";
import FieldImage from "../../../../../../public/images/articles/field.png";
import GreenTeaImage from "../../../../../../public/images/articles/green-tea.png";

const AllBlogsSection = () => {


  return (
    <Div className={'flex-col gap-14'}>
      <Text typography={['xl', 'xl']} type={'bold'}>Recent blog posts</Text>
      <Div className={'grid grid-cols-3 gap-y-14 gap-x-8'}>
        <BlogItem
          day={'23'}
          month={'JAN'}
          title={'Lorem ipsum dolor'}
          image={FieldImage}
          description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
          tags={['']}
        />
        <BlogItem
          day={'23'}
          month={'JAN'}
          title={'Best Teas for Energy: Natural Boosts to Power Up Your Da'}
          image={GreenTeaImage}
          description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type'}
          tags={['']}
        />
        <BlogItem
          day={'23'}
          month={'JAN'}
          title={'Best Teas for Energy: Natural Boosts to Power Up Your Da'}
          image={NatureImage}
          description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type'}
          tags={['']}
        />
        <BlogItem
          day={'23'}
          month={'JAN'}
          title={'Lorem ipsum dolor'}
          image={FieldImage}
          description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
          tags={['']}
        />
        <BlogItem
          day={'23'}
          month={'JAN'}
          title={'Best Teas for Energy: Natural Boosts to Power Up Your Da'}
          image={GreenTeaImage}
          description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type'}
          tags={['']}
        />
        <BlogItem
          day={'23'}
          month={'JAN'}
          title={'Best Teas for Energy: Natural Boosts to Power Up Your Da'}
          image={NatureImage}
          description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type'}
          tags={['']}
        />
        <BlogItem
          day={'23'}
          month={'JAN'}
          title={'Lorem ipsum dolor'}
          image={FieldImage}
          description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
          tags={['']}
        />
        <BlogItem
          day={'23'}
          month={'JAN'}
          title={'Best Teas for Energy: Natural Boosts to Power Up Your Da'}
          image={GreenTeaImage}
          description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type'}
          tags={['']}
        />
        <BlogItem
          day={'23'}
          month={'JAN'}
          title={'Best Teas for Energy: Natural Boosts to Power Up Your Da'}
          image={NatureImage}
          description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type'}
          tags={['']}
        />
      </Div>
    </Div>
  )
}

export default AllBlogsSection;