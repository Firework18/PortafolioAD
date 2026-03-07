import { createBrowserRouter, Router } from "react-router-dom";
import Home from "./features/home/pages/Home";
import About from "./features/about/pages/About";
import Projects from "./features/projects/pages/Projects";
import Layout from "./layouts/Layout";


const router = createBrowserRouter([

    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "projects",
                element: <Projects />
            }
        ]
    }

]);

export default router;