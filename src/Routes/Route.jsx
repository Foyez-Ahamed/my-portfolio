import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/About/About";
import Skills from "../Pages/Skills/Skills";
import Projects from "../Pages/Projects/Projects";
import ProjectDetails from "../Pages/Projects/ProjectDetails";
import Contact from "../Pages/Home/Contact/Contact";

const Route = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout></MainLayout>,
        errorElement : <ErrorPage></ErrorPage>,
        children: [
            {
                path : '/',
                element : <Home></Home>
            },

            {
                path : "about",
                element : <About></About>
            },

            {
                path : 'skills',
                element : <Skills></Skills>
            },

            {
                path : "contact",
                element : <Contact></Contact>
            },

            {
                path : 'projects',
                element : <Projects></Projects>
            },

            {
                path : 'projectDetails/:id',
                element : <ProjectDetails></ProjectDetails>
            }
        ]
    }
])

export default Route;