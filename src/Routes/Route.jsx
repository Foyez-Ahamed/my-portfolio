import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

const Route = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout></MainLayout>
    }
])

export default Route;