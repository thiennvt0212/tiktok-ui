import { OnlyHeader } from "~/components/Layout";

import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";
import routes from '~/Config/routes';

export const publicRotes = [
  { path: routes.home, component: Home },
  { path: routes.following, component: Following },
  { path: routes.profile, component: Profile },
  { path: routes.upload, component: Upload, layoutPage: OnlyHeader },
  { path: routes.search, component: Search, layoutPage: null },
];
export const privateRotes = [];
