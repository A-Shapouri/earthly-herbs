import routes from '@routes';
import { fetchApi } from '@api/fetch';

const shippingCouriersListApi = () => {
  return fetchApi({
    method: 'GET',
    url: routes['api.shipping.couriers.list'],
  });
};

export default shippingCouriersListApi;
