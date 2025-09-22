import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface RegisterProps extends CacheProps{
  email: string

  password: string
}

const registerApi = ({ email, password }: RegisterProps) => {
  return fetchApi({
    method: 'POST',
    url: routes['api.auth.register'],
    payload: {
      email: email,
      password: password,
    },
  });
};

export default registerApi;
