import config from "~/config";
import { Authentication } from '~/layout';
import {
    Home,
    Login,
    Signup
} from '~/views';

const publicRoutes = [
    { path: config.routes.home , component: Home},
    { path: config.routes.signup , component: Signup, layout: Authentication},
    { path: config.routes.login , component: Login, layout: Authentication},
]

const privateRoutes = []

export { privateRoutes, publicRoutes };

