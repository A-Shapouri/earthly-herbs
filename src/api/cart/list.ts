import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface CartListProps extends CacheProps{
  page?: number

  sort?: string

  perPage?: number

}

const cartListApi = ({ page = 0, sort = 'id,desc', perPage = 10 }: CartListProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.products.list-cart'],
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

export default cartListApi;
