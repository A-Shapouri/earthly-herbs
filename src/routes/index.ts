import { homeRoutes } from './home';
import { productsRoutes } from './products';
import { blogRoutes } from './blog';
import { profileRoutes } from './profile';
import { authRoutes } from './auth';
import { categoriesRoutes } from './categories';
import { addressRoutes } from './address';
import { customerRoutes } from './customer';
import { termRoutes } from './terms';
import { faqRoutes } from './faq';
import { shippingRoutes } from './shipping-couriers';
import { orderRoutes } from './order';

const routes = {
  ...homeRoutes,
  ...productsRoutes,
  ...blogRoutes,
  ...profileRoutes,
  ...authRoutes,
  ...categoriesRoutes,
  ...addressRoutes,
  ...customerRoutes,
  ...termRoutes,
  ...faqRoutes,
  ...shippingRoutes,
  ...orderRoutes,
};

export default routes;
