import { NextRequest, NextResponse } from 'next/server';
import { getBlogPostById, getRecentBlogPosts, getAllBlogPosts } from '../../../data/blogs';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const type = searchParams.get('type');
  const limit = searchParams.get('limit');

  try {
    if (id) {
      // Get specific blog post by ID
      const blogPost = getBlogPostById(id);
      if (!blogPost) {
        return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
      }
      return NextResponse.json(blogPost);
    }

    if (type === 'recent') {
      // Get recent blog posts
      const limitNum = limit ? parseInt(limit) : 3;
      const recentPosts = getRecentBlogPosts(limitNum);
      return NextResponse.json(recentPosts);
    }

    if (type === 'all') {
      // Get all blog posts
      const allPosts = getAllBlogPosts();
      return NextResponse.json(allPosts);
    }

    // Default: return all blog posts
    const allPosts = getAllBlogPosts();
    return NextResponse.json(allPosts);
  } catch (error) {
    console.error('Blog API Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
