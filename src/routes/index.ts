import { homeRoutes } from './home';
import { productsRoutes } from './products';
import { blogRoutes } from './blog';
import { profileRoutes } from './profile';
import { authRoutes } from './auth';
import { categoriesRoutes } from './categories';
import { addressRoutes } from './address';

const routes = {
  ...homeRoutes,
  ...productsRoutes,
  ...blogRoutes,
  ...profileRoutes,
  ...authRoutes,
  ...categoriesRoutes,
  ...addressRoutes,
};

export default routes;
