import React from "react";
import Selectscreen from "./components/select/Select";
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Getin from "./components/getin/Getin";
import Forms from "./components/commun/Fomsscreen";
import Denuncia from "./components/estaticas/Denuncia";
import Sudeo from "./components/sudeo/Sudeo";
import Testerte from "./components/tester";
import Sulos from "./components/sulos/Sulos";
import Gesup from "./components/gesup/Gesup";
import Meuschamados from "./components/estaticas/meusChamados";
import Gepat from "./components/gepat/Gepat";
import Cipa from "./components/cipa/Cipa";
import Geroc from "./components/geroc/Geroc";
import Gesea from "./components/gesea/Gesea";
import Rh from "./components/rh/RH";

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
    },
    {
      path: "/websk/:data",
      element: <Testerte/>
    },
    {
      path: "/SULOS",
      element: <Sulos/>
    },
    {
      path: "/GESUP",
      element: <Gesup/>
    },
    {
      path: "/MEUS CHAMADOS",
      element: <Meuschamados/>
    },
    {
      path: "/GEPAT",
      element: <Gepat/>
    },
    {
      path: "/CIPA",
      element: <Cipa/>
    },
    {
      path: "/GEROC",
      element: <Geroc/>
    },
    {
      path: "/GESEA",
      element: <Gesea/>
    },
    {
      path: "/RH",
      element: <Rh/>
    }
    



    
   ])

  return (
   <div>
    <RouterProvider router={router}> </RouterProvider>
   </div>
  );
}

export default App;
