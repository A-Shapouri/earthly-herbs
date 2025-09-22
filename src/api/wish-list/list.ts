import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface WishListProps extends CacheProps{
  page?: number

  sort?: string

  perPage?: number
}

const wishListGetApi = ({ page = 0, sort = 'id,desc', perPage = 10 }: WishListProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.customer.wish-list-get'],
      query: {
        page: page,
        sort: sort,
        size: perPage,
      },
    },
    withPagination: true,
    withToken: true,
  });
};

export default wishListGetApi;
