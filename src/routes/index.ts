import { homeRoutes } from './home';
import { productsRoutes } from './products';
import { blogRoutes } from './blog';
import { profileRoutes } from './profile';

const routes = {
  ...homeRoutes,
  ...productsRoutes,
  ...blogRoutes,
  ...profileRoutes,
};

export default routes;
