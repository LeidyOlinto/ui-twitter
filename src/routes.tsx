import { createBrowserRouter } from "react-router-dom";
import { Default } from "./pages/layouts/Default";
import { Status } from "./pages/Status";
import { Timeline } from "./pages/Timeline";

export const router = createBrowserRouter([
 
  {
    path: "/",
    element:<Default />,
    children:[
      {
        path:'/',
        element:<Timeline />
      },
      {
        path:'/status',
        element:<Status />
      },

    ]
  }
])