import { cookies } from 'next/headers';
import routes from '@routes';

export interface CategoriesListServerProps {
  cache?: 'default' | 'force-cache' | 'no-cache' | 'no-store' | 'only-if-cached' | 'reload';
  next?: { revalidate: number };
}

const categoriesListServerApi = async ({ 
  cache = 'no-cache',
  next
}: CategoriesListServerProps = {}) => {
  const baseURL = `http://74.208.77.41:8080/api/v1`;

  // Get token from server-side cookies
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value;

  const headers: HeadersInit = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  try {
    const response = await fetch(encodeURI(`${baseURL}/${routes['api.categories.list']}`), {
      headers,
      method: 'GET',
      cache,
      next,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Server API Error:', error);
    throw error;
  }
};

export default categoriesListServerApi;
