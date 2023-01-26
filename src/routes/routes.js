import config from "../config";
import Home from "../pages/Home/Home";
import Detail from "../pages/Detail/Detail";
import NotFound from "../pages/NotFound404/NotFound";
import { HeaderFooterOnly } from "../layouts";
import Activities from "../pages/Activities/Activities";

const publicRoutes = [
  {
    path: config.routes.home,
    component: Home,
  },
  {
    path: config.routes.detail,
    component: Detail,
  },
  {
    path: config.routes.activities,
    component: Activities,
    layout: HeaderFooterOnly,
  },
  {
    path: config.routes.notFound,
    component: NotFound,
    layout: null,
  },
];

export { publicRoutes };
