import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface ProductsListProps extends CacheProps{
  page?: number

  sort?: string

  perPage?: number

  minPrice?: number

  maxPrice?: number
}

const productsListApi = ({ page = 0, sort = 'id,desc', perPage = 10, minPrice = null, maxPrice = null }: ProductsListProps) => {
  return fetchApi({
    method: 'POST',
    url: {
      pathname: routes['api.products.list'],
      query: {
        page: page,
        sort: sort,
        size: perPage,
      },
    },
    payload: {
      minPrice: minPrice,
      maxPrice: maxPrice,
    },
    withPagination: true,
  });
};

export default productsListApi;
