import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface AddressUpdateProps extends CacheProps{
  id: string
  payload: any
}

const addressUpdateApi = ({ id, payload }: AddressUpdateProps) => {
  return fetchApi({
    method: 'PUT',
    url: {
      pathname: routes['api.address.update'],
      query: {
        id: id,
      },
    },
    payload: payload,
    withToken: true,
  });
};

export default addressUpdateApi;
