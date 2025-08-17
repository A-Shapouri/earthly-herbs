import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface AddressListProps extends CacheProps{
  page?: number

  sort?: string

  perPage?: number
}

const addressListApi = ({ page = 0, sort = 'id,desc', perPage = 10 }: AddressListProps) => {
  return fetchApi({
    method: 'POST',
    url: {
      pathname: routes['api.address.list'],
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

export default addressListApi;
