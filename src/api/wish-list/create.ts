import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface CreateWishListProps extends CacheProps {
  productId: string;
  customerId: string;
}

const createWishListApi = ({ customerId, productId }: CreateWishListProps) => {
  return fetchApi({
    method: 'POST',
    url: routes['api.customer.wish-list-create'],
    payload: {
      customerId,
      productId,
    },
    withToken: true,
  });
};

export default createWishListApi;
