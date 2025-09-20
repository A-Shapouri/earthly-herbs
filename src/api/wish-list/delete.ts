import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface DeleteWishListProps extends CacheProps {
  id: string;
}

const deleteWishListApi = ({ id }: DeleteWishListProps) => {
  return fetchApi({
    method: 'DELETE',
    url: {
      pathname: routes['api.customer.wish-list-delete'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default deleteWishListApi;
