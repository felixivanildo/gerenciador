import React from "react";
import Selectscreen from "./components/select/Select";
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Getin from "./components/getin/Getin";


function App() {
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Selectscreen/>,
       
    },
    {
      path: "/GETIN",
      element: <Getin/>
    }

    
   ])

  return (
   <div>
    <RouterProvider router={router}> </RouterProvider>
   </div>
  );
}

export default App;
