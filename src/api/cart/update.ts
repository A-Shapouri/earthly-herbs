import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface UpdateCartProps extends CacheProps {
  payload: any
  id: string
}

const updateCartApi = ({ payload, id }: UpdateCartProps) => {
  console.log(payload,'payload');
  console.log(id,'id');
  return fetchApi({
    method: 'PUT',
    url: {
      pathname: routes['api.products.update-cart'],
      query: {
        id: id,
      },
    },
    payload: payload,
    withToken: true,
  });
};

export default updateCartApi;
