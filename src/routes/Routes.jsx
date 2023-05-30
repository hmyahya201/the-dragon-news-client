import { createBrowserRouter } from "react-router-dom";
import Main from '../layoutes/Main';
import Home from '../pages/Home/Home/Home'
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layoutes/NewsLayout";
import News from "../pages/News/News";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/category/:id",
                element: <Category></Category>,
                loader: ({params})=>fetch(`http://localhost:5000/categories/${params.id}`)
            },
        ]
    },
    {
        path: "/news",
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path:"/news/:id",
                element: <News></News>,
                loader: ({params})=>fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]

    }
])
export default router
