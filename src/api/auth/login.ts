import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface LoginProps extends CacheProps{
  email: string

  password: string
}

const loginApi = ({ email, password }: LoginProps) => {
  return fetchApi({
    method: 'POST',
    url: routes['api.auth.login'],
    payload: {
      username: email,
      password: password,
      rememberMe: false,
    },
  });
};

export default loginApi;
