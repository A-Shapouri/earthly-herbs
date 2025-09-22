import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface CreateAddressProps extends CacheProps {
customerId: string;
address1: string;
address2: string;
city: string;
company: string;
countryId: string;
firstname: string;
lastname: string;
postcode: string;
zoneId: string;
}

const createAddressApi = ({ customerId, address1, address2, city, company, countryId, firstname, lastname, postcode, zoneId }: CreateAddressProps) => {
  return fetchApi({
    method: 'POST',
    url: routes['api.address.create'],
    payload: {
      customerId,
      address1,
      address2,
      city,
      company,
      countryId,
      firstname,
      lastname,
      postcode,
      zoneId,
    },
    withToken: true,
  });
};

export default createAddressApi;
