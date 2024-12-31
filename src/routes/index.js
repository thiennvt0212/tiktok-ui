import { OnlyHeader } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

export const publicRotes = [
    { path: '/' , component: Home},
    { path: '/following' , component: Following},
    { path: '/profile' , component: Profile},
    { path: '/upload' , component: Upload, layoutPage: OnlyHeader},
    { path: '/search' , component: Search, layoutPage: null}
];
export const privateRotes = [

];
