import routes from '@routes';
import getParseUrl from '@utils/helpers/parse-url';
import { cookies } from 'next/headers';

export interface ProductDetailsProps {
  id: string;
  cache?: RequestCache;
  next?: { revalidate: number };
}

const productDetailsServerApi = async ({ id, cache = 'no-cache', next }: ProductDetailsProps) => {
  const parseUrl: string = getParseUrl({
    pathname: routes['api.products.details'],
    query: { id }
  });
  
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
    const response = await fetch(encodeURI(`${baseURL}/${parseUrl}`), {
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

export default productDetailsServerApi;
