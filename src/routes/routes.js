import config from "../config";
import Home from "../pages/Home/Home";
import Detail from "../pages/Detail/Detail";
import NotFound from "../pages/NotFound404/NotFound";
import Activities from "../pages/Activities/Activities";
import Porfolios from "../pages/Porfolios/Porfolios";
import { HeaderFooterOnly } from "../layouts";

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
    path: config.routes.porfolios,
    component: Porfolios,
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
