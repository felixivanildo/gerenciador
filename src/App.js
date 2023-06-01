import React from "react";
import Selectscreen from "./components/select/Select";
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Getin from "./components/getin/Getin";
import Forms from "./components/commun/Fomsscreen";
import Denuncia from "./components/estaticas/Denuncia";
import Sudeo from "./components/sudeo/Sudeo";


function App() {
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Selectscreen/>,
       
    },
    {
      path: "/GETIN",
      element: <Getin/>
    },
    {
      path: "/FORMS",
      element: <Forms/>
    },
    {path: "/DENÚNCIA",
     element: <Denuncia/>
    },
    {
      path: "/SUDEO",
      element: <Sudeo/>
    }


    
   ])

  return (
   <div>
    <RouterProvider router={router}> </RouterProvider>
   </div>
  );
}

export default App;
