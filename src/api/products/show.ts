import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface ProductDetailsProps extends CacheProps{
  id: string
}

const productDetailsApi = ({ id }: ProductDetailsProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.products.details'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default productDetailsApi;
