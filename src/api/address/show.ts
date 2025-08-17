import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface AddressShowProps extends CacheProps{
  id: string
}

const addressShowApi = ({ id }: AddressShowProps) => {
  return fetchApi({
    method: 'GET',
    url: {
      pathname: routes['api.address.show'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default addressShowApi;
