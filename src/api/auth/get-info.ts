import routes from '@routes';
import { fetchApi } from '@api/fetch';

const getInfoApi = () => {
  return fetchApi({
    method: 'GET',
    url: routes['api.auth.get-info'],
    withToken: true,
  });
};

export default getInfoApi;
