import {homeRoutes} from './home';
import {shopRoutes} from './shop';
import {blogRoutes} from './blog';
import {profileRoutes} from './profile';

const routes = {
  ...homeRoutes,
  ...shopRoutes,
  ...blogRoutes,
  ...profileRoutes,
};

export default routes;
