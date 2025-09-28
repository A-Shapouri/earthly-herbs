'use client';
import React, { useEffect, useState } from 'react';
import Div from '@elements/div';
import Text from '@elements/text';
import BlogItem from '../blog-item';
import { BlogPost } from '../../../../../data/blogs';

const RecentBlogSection = () => {
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const response = await fetch('/api/blogs?type=recent&limit=3');
        const data = await response.json();
        setRecentPosts(data);
      } catch (error) {
        console.error('Error fetching recent posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentPosts();
  }, []);

  if (loading) {
    return (
      <Div className={'flex-col md:gap-14 gap-6'}>
        <Text typography={['xl', 'xl']} type={'black'}>Recent blog posts</Text>
        <Div className={'grid md:grid-cols-2 grid-cols-1 gap-y-14 gap-x-8'}>
          {[1, 2, 3].map((index) => (
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
      <Text typography={['xl', 'xl']} type={'black'}>Recent blog posts</Text>
      <Div className={'grid md:grid-cols-2 grid-cols-1 gap-y-14 gap-x-8'}>
        {recentPosts.map((post, index) => (
          <BlogItem
            key={post.id}
            id={post.id}
            isPrimary={index === 0}
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

export default RecentBlogSection;
