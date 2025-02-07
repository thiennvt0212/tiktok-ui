import { OnlyHeader } from "~/components/Layout";

import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";
import config from '~/Config';

export const publicRotes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Following },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.upload, component: Upload, layoutPage: OnlyHeader },
  { path: config.routes.search, component: Search, layoutPage: null },
];
export const privateRotes = [];
