import { cookies } from 'next/headers';
import routes from '@routes';
import getParseUrl from '@utils/helpers/parse-url';

export interface ProductsListServerProps {
  page?: number;
  sort?: string;
  perPage?: number;
  minPrice?: number | null;
  maxPrice?: number | null;
  cache?: 'default' | 'force-cache' | 'no-cache' | 'no-store' | 'only-if-cached' | 'reload';
  next?: { revalidate: number };
}

const productsListServerApi = async ({ 
  page = 0, 
  sort = 'id,desc', 
  perPage = 10, 
  minPrice = null, 
  maxPrice = null,
  cache = 'no-cache',
  next
}: ProductsListServerProps) => {
  const parseUrl: string = getParseUrl({
    pathname: routes['api.products.list'],
    query: {
      page: page,
      sort: sort,
      size: perPage,
    },
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

  const payload = {
    minPrice: minPrice,
    maxPrice: maxPrice,
  };

  try {
    const response = await fetch(encodeURI(`${baseURL}/${parseUrl}`), {
      headers,
      method: 'POST',
      body: JSON.stringify(payload),
      cache,
      next,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Handle pagination headers
    const pagination = {
      total: parseInt(response.headers.get('X-Total-Count') || '0'),
      lastPage: parseInt(response.headers.get('X-Last-Page') || '0'),
      currentPage: parseInt(response.headers.get('X-Current-Page') || '0'),
      totalPage: parseInt(response.headers.get('X-Total-Page') || '0'),
      perPage: parseInt(response.headers.get('X-Per-Page') || '0'),
    };

    const data = await response.json();
    return {
      data: data,
      pagination: pagination,
    };
  } catch (error) {
    console.error('Server API Error:', error);
    throw error;
  }
};

export default productsListServerApi;
