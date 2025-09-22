import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

const categoiresListApi = ({ ...rest }: CacheProps) => {
  return fetchApi({
    method: 'GET',
    url: routes['api.categories.list'],
    ...rest,
  });
};

export default categoiresListApi;
