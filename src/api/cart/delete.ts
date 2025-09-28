import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface DeleteCartProps extends CacheProps {
  id: string
}

const deleteCartApi = ({ id }: DeleteCartProps) => {
  return fetchApi({
    method: 'DELETE',
    url: {
      pathname: routes['api.products.delete-cart'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default deleteCartApi;
