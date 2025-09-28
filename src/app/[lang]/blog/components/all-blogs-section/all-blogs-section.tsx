'use client';
import React, { useEffect, useState } from 'react';
import Div from '@elements/div';
import Text from '@elements/text';
import BlogItem from '../blog-item';
import { BlogPost } from '../../../../../data/blogs';

const AllBlogsSection = () => {
  const [allPosts, setAllPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const response = await fetch('/api/blogs?type=all');
        const data = await response.json();
        setAllPosts(data);
      } catch (error) {
        console.error('Error fetching all posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllPosts();
  }, []);

  if (loading) {
    return (
      <Div className={'flex-col md:gap-14 gap-6'}>
        <Text typography={['xl', 'xl']} type={'black'}>All blog posts</Text>
        <Div className={'grid md:grid-cols-3 grid-cols-1 gap-y-14 gap-x-8'}>
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <Div key={index} className="animate-pulse">
              <Div className="bg-gray-200 rounded-xl h-48 mb-4"></Div>
              <Div className="bg-gray-200 h-6 rounded mb-2"></Div>
              <Div className="bg-gray-200 h-4 rounded mb-4"></Div>
              <Div className="flex gap-2">
                <Div className="bg-gray-200 h-6 w-16 rounded"></Div>
                <Div className="bg-gray-200 h-6 w-16 rounded"></Div>
              </Div>
            </Div>
          ))}
        </Div>
      </Div>
    );
  }

  return (
    <Div className={'flex-col md:gap-14 gap-6'}>
      <Text typography={['xl', 'xl']} type={'black'}>All blog posts</Text>
      <Div className={'grid md:grid-cols-3 grid-cols-1 gap-y-14 gap-x-8'}>
        {allPosts.map((post) => (
          <BlogItem
            key={post.id}
            id={post.id}
            day={post.day}
            month={post.month}
            title={post.title}
            image={post.image}
            description={post.description}
            tags={post.tags}
          />
        ))}
      </Div>
    </Div>
  );
};

export default AllBlogsSection;
