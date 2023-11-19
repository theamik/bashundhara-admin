import { lazy } from "react";
const Login = lazy(() => import("../../views/auth/Login"))
const Register = lazy(() => import("../../views/auth/Register"))
const AdminLogin = lazy(() => import("../../views/auth/AdminLogin.jsx"))
const Home = lazy(() => import("../../views/Home.jsx"))
const UnAuthorized = lazy(() => import("../../views/UnAuthorized.jsx"))
const Success = lazy(() => import("../../views/Success.jsx"))

const publicRoutes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/admin/login',
        element: <AdminLogin />
    },
    {
        path: '/unauthorized',
        element: <UnAuthorized />
    },
    {
        path: '/success?',
        element: <Success />
    },

]

export default publicRoutes;