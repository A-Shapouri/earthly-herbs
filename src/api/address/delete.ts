import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface AddressDeleteProps extends CacheProps{
  id: string
}

const addressDeleteApi = ({ id }: AddressDeleteProps) => {
  return fetchApi({
    method: 'DELETE',
    url: {
      pathname: routes['api.address.delete'],
      query: {
        id: id,
      },
    },
    withToken: true,
  });
};

export default addressDeleteApi;
