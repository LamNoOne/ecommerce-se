// import config from "~/config";
// import { Authentication } from '~/layout';
// import {
//     Home,
//     Login,
//     Signup,
//     WishList,
//     Cart,
//     SingleProduct,
//     CheckOut,
//     SmartPhone,
//     Member,
//     Tivi,
//     Camera,
//     Laptop,
//     Studio,
//     Promotion,
//     PC,
//     Accessories
// } from '~/views';

// // Them truong pathChildren la Object, key la path, value la Page, path dang :id hoac /xxx/xxx
// // Neu isPathChildren, Object entries => mang => map => <Route path="_path" element={<_element />} />
// // { path: config.routes.login
// // , component: Login,
// // pathChildren={
// //   path1: Component1,
// //   path2: Component2
// //},
// // layout: Authentication}

// // public routes don't require login
// // private routes require login, if user trying to access, we need to navigate them to home page,
// // depend on private routes

// const publicRoutes = [
//     { path: config.routes.home , component: Home},
//     { path: config.routes.pc , component: PC},
//     { path: config.routes.tivi , component: Tivi},
//     { path: config.routes.camera , component: Camera},
//     { path: config.routes.laptop , component: Laptop},
//     { path: config.routes.studio , component: Studio},
//     { path: config.routes.promotion , component: Promotion},
//     { path: config.routes.smartphone , component: SmartPhone},
//     { path: config.routes.accessories , component: Accessories},
//     { path: config.routes.singlePC, component: SingleProduct},
//     { path: config.routes.singleTivi, component: SingleProduct},
//     { path: config.routes.singleLaptop, component: SingleProduct},
//     { path: config.routes.singleStudio, component: SingleProduct},
//     { path: config.routes.singleCamera, component: SingleProduct},
//     { path: config.routes.singleProduct, component: SingleProduct},
//     { path: config.routes.singlePromotion, component: SingleProduct},
//     { path: config.routes.singleSmartPhone, component: SingleProduct},
//     { path: config.routes.singleAccessories, component: SingleProduct},
//     { path: config.routes.login , component: Login, layout: Authentication},
//     { path: config.routes.signup , component: Signup, layout: Authentication},
// ]

// const privateRoutes = [
//     { path: config.routes.cart, component: Cart},
//     { path: config.routes.member, component: Member},
//     { path: config.routes.checkOut, component: CheckOut},
//     { path: config.routes.wishlist, component: WishList},
// ]

// export { privateRoutes, publicRoutes };

import { useRoutes } from "react-router-dom"

import { Authentication, DefaultLayout } from "~/layout"
import {
    Home,
    Login,
    Signup,
    WishList,
    Cart,
    SingleProduct,
    CheckOut,
    SmartPhone,
    HomeMember,
    Tivi,
    Camera,
    Laptop,
    Studio,
    Promotion,
    PC,
    Accessories,
    Order,
    SingleOrder,
    Warranty,
    Gift,
    Rank,
    Account,
    Support,
    Feedback,
} from "~/views"

export default function Router() {
    let element = useRoutes([
        {
            element: <DefaultLayout />,
            children: [
                { path: "/", element: <Home /> },
                { path: "/laptop", element: <Laptop /> },
                { path: "/studio", element: <Studio /> },
                { path: "/smartphone", element: <SmartPhone /> },
                { path: "/camera", element: <Camera /> },
                { path: "/accessories", element: <Accessories /> },
                { path: "/pc", element: <PC /> },
                { path: "/tivi", element: <Tivi /> },
                { path: "/promotion", element: <Promotion /> },
                { path: "/member", element: <HomeMember /> },
                { path: "/user/wishlist", element: <WishList /> },
                { path: "/user/cart", element: <Cart /> },
                { path: "/user/checkout", element: <CheckOut /> },
            ],
        },
        {
            path: "/member",
            element: <DefaultLayout />,
            children: [
                { path: "order", element: <Order /> },
                { path: "warranty", element: <Warranty /> },
                { path: "gift", element: <Gift /> },
                { path: "rank", element: <Rank /> },
                { path: "account", element: <Account /> },
                { path: "support", element: <Support /> },
                { path: "feedback", element: <Feedback /> },
                { path: "order/:id", element: <SingleOrder /> },
            ],
        },
        {
            path: "/product",
            element: <DefaultLayout />,
            children: [{ path: ":id", element: <SingleProduct /> }],
        },
        {
            path: "/smartphone",
            element: <DefaultLayout />,
            children: [{ path: ":id", element: <SingleProduct /> }],
        },
        {
            path: "/laptop",
            element: <DefaultLayout />,
            children: [{ path: ":id", element: <SingleProduct /> }],
        },
        {
            path: "/studio",
            element: <DefaultLayout />,
            children: [{ path: ":id", element: <SingleProduct /> }],
        },
        {
            path: "/camera",
            element: <DefaultLayout />,
            children: [{ path: ":id", element: <SingleProduct /> }],
        },
        {
            path: "/accessories",
            element: <DefaultLayout />,
            children: [{ path: ":id", element: <SingleProduct /> }],
        },
        {
            path: "/pc",
            element: <DefaultLayout />,
            children: [{ path: ":id", element: <SingleProduct /> }],
        },
        {
            path: "/tivi",
            element: <DefaultLayout />,
            children: [{ path: ":id", element: <SingleProduct /> }],
        },
        {
            path: "/promotion",
            element: <DefaultLayout />,
            children: [{ path: ":id", element: <SingleProduct /> }],
        },
        {
            element: <Authentication />,
            children: [
                { path: "/login", element: <Login /> },
                { path: "/signup", element: <Signup /> },
            ],
        },
    ])
    return element
}
