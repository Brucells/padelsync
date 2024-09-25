import App from "@/App";
import Analytics from "@/pages/Analytics";
import Dashboard from "@/pages/Dashboard";
import Matchs from "@/pages/Matchs";
import Progression from "@/pages/Progression";
import Videos from "@/pages/Videos";
import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: '/',
                element: <Dashboard />
            },
            {
                path: '/matchs',
                element: <Matchs />
            },
            {
                path: '/analytics',
                element: <Analytics />
            },
            {
                path: '/progression',
                element: <Progression />
            },
            {
                path: '/videos',
                element: <Videos />
            }
        ]
    }
])

export default router