import routes from '@routes';
import { CacheProps, fetchApi } from '@api/fetch';

export interface CreateOrderProps extends CacheProps {
  customerId: string;
  customerAddressId: string;
  total: number;
  products: Array<{
    productId: string;
    quantity: string;
  }>;
  shipments: {
    id: string;
    carrier: string;
  };
}

const createOrderApi = ({ customerId, customerAddressId, total, products, shipments }: CreateOrderProps) => {
  return fetchApi({
    method: 'POST',
    url: routes['api.order.create'],
    payload: {
      invoiceNo: 1238745,
      invoicePrefix: 'ORD',
      customerId: customerId,
      customerAddressId: customerAddressId,
      orderStatusId: '1',
      total: total,
      products: products,
      shipments: [
        {
          id: shipments.id,
          trackingNumber: 'TRK123456789',
          carrier: shipments.carrier,
          status: '1',
          shippingCost: 12.99,
          dateShipped: '2025-10-21T10:00:00Z',
          dateDelivered: '2025-11-21T10:00:00Z',
        },
      ],
    },
    withToken: true,
  });
};

export default createOrderApi;
