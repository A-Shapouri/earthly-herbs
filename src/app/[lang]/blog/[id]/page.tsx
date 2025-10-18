'use client';
import Breadcrumbs from '@elements/breadcrumbs';
import Container from '@elements/container';
import Div from '@elements/div';
import Text from '@elements/text';
import Wrapper from '@layouts/wrapper';
import { useParams } from 'next/navigation';
import getParseRoute from '@utils/helpers/parse-route';
import routes from '@routes';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { BlogPost } from '../../../../data/blogs';

const BlogDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await fetch(`/api/blogs?id=${encodeURIComponent(id)}`);
        if (response.ok) {
          const data = await response.json();
          setBlogPost(data);
        } else {
          console.error('Blog post not found');
        }
      } catch (error) {
        console.error('Error fetching blog post:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBlogPost();
    }
  }, [id]);

  if (loading) {
    return (
      <Container>
        <Div className={'bg-flurries-500 w-full justify-center items-center'}>
          <Wrapper className={'px-5 md:px-0'}>
            <Breadcrumbs breadcrumbsData={[{
              label: 'Blog',
              path: getParseRoute({ pathname: routes['route.blog.index'], locale: 'en' }),
            }, {
              label: 'Loading...',
            }]} />
          </Wrapper>
        </Div>
        <Wrapper className={'px-5 md:flex-row-reverse flex-col pt-8 gap-4 md:pb-24 pb-8 md:gap-16 md:pt-16'}>
          <Div className={'md:gap-16 gap-6 flex-col w-full'}>
            <Div className="animate-pulse">
              <Div className="bg-gray-200 h-8 rounded mb-4"></Div>
              <Div className="bg-gray-200 h-64 rounded-xl mb-6"></Div>
              <Div className="space-y-4">
                <Div className="bg-gray-200 h-4 rounded"></Div>
                <Div className="bg-gray-200 h-4 rounded w-3/4"></Div>
                <Div className="bg-gray-200 h-4 rounded w-1/2"></Div>
              </Div>
            </Div>
          </Div>
        </Wrapper>
      </Container>
    );
  }

  if (!blogPost) {
    return (
      <Container>
        <Div className={'bg-flurries-500 w-full justify-center items-center'}>
          <Wrapper className={'px-5 md:px-0'}>
            <Breadcrumbs breadcrumbsData={[{
              label: 'Blog',
              path: getParseRoute({ pathname: routes['route.blog.index'], locale: 'en' }),
            }, {
              label: 'Not Found',
            }]} />
          </Wrapper>
        </Div>
        <Wrapper className={'px-5 md:flex-row-reverse flex-col pt-8 gap-4 md:pb-24 pb-8 md:gap-16 md:pt-16'}>
          <Div className={'md:gap-16 gap-6 flex-col w-full'}>
            <Text type={'black'} typography={['xl', 'xl']}>Blog post not found</Text>
            <Text color={'grey.700'} typography={['md', 'md']}>The requested blog post could not be found.</Text>
          </Div>
        </Wrapper>
      </Container>
    );
  }

  const contentParagraphs = blogPost.content.split('\n\n').filter(paragraph => paragraph.trim());

  return (
    <Container>
      <Div className={'bg-flurries-500 w-full justify-center items-center'}>
        <Wrapper className={'px-5 md:px-0'}>
          <Breadcrumbs breadcrumbsData={[{
            label: 'Blog',
            path: getParseRoute({ pathname: routes['route.blog.index'], locale: 'en' }),
          }, {
            label: blogPost.title,
          }]} />
        </Wrapper>
      </Div>
      <Wrapper className={'px-5 md:flex-row-reverse flex-col pt-8 gap-4 md:pb-24 pb-8 md:gap-16 md:pt-16'}>
        <Div className={'md:gap-16 gap-6 flex-col w-full'}>
          <Text type={'black'} typography={['xl', 'xl']}>{blogPost.title}</Text>

          {/* Image and content with text wrapping */}
          <div className={'w-full'}>
            {/* Image floating to the right on larger screens */}
            <div className={'float-right ml-6 mb-4 w-[400px] h-[250px] relative hidden md:block'}>
              <Image
                src={blogPost.image}
                alt={blogPost.title}
                className={'object-cover rounded-lg'}
                fill={true}
              />
            </div>

            {/* Mobile image */}
            <div className={'w-full h-[200px] relative mb-6 md:hidden'}>
              <Image
                src={blogPost.image}
                alt={blogPost.title}
                className={'object-cover rounded-lg'}
                fill={true}
              />
            </div>

            {/* Content that wraps around the image */}
            <div className={'w-full'}>
              {contentParagraphs.map((paragraph, index) => (
                <div key={index} className={'mb-6'}>
                  <Text color={'grey.700'} typography={['sm', 'sm']} type={'medium'}>
                    {paragraph}
                  </Text>
                </div>
              ))}
            </div>

            {/* Clear float and add tags */}
            <div className={'clear-both pt-6'}>
              <Div className={'gap-2 flex-wrap'}>
                {blogPost.tags.map((tag, index) => (
                  <Div key={index} className={'h-8 px-4 rounded-full bg-flurries items-center justify-center'}>
                    <Text type={'bold'} typography={['xs', 'xs']}>{tag}</Text>
                  </Div>
                ))}
              </Div>
            </div>
          </div>
        </Div>
      </Wrapper>
    </Container>
  );
};

export default BlogDetails;
