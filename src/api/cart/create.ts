import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface CreateCartProps extends CacheProps {
  productId: string;
  quantity: string;
  recurringId?: string;
}

const createCartApi = ({ productId, quantity, recurringId = '1' }: CreateCartProps) => {
  return fetchApi({
    method: 'POST',
    url: routes['api.products.create-cart'],
    payload: {
      productId,
      quantity,
      recurringId,
    },
    withToken: true,
  });
};

export default createCartApi;
