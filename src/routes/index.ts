import {homeRoutes} from './home';
import {shopRoutes} from './shop';
import {blogRoutes} from './blog'

const routes = {
  ...homeRoutes,
  ...shopRoutes,
  ...blogRoutes,
};

export default routes;
