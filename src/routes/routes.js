import config from "../config";
import Home from "../pages/Home/Home";
import Detail from "../pages/Detail/Detail";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound404/NotFound";
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
    path: config.routes.contact,
    component: Contact,
    layout: HeaderFooterOnly,
  },
  {
    path: config.routes.notFound,
    component: NotFound,
    layout: null,
  },
];

export { publicRoutes };
