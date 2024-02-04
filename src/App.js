import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from './Componants/Navbar/Navbar';
import AppFooter from './Componants/Footer/AppFooter';
import Home from './Componants/Home/Home';
import About from './Componants/About/About';
import Conatct from './Componants/Conatct/Conatct';
import Portfolio from './Componants/Portfolio/Portfolio';
import MasterLayout from './Componants/MasterLayout/MasterLayout';
import Notfound from './Componants/Notfound/Notfound'
function App() {
  const router =createBrowserRouter([
    {path:'',element:<MasterLayout/>,errorElement:<Notfound/>,children:[
    {path:'',element:<Home/>},
    {path:'start_framework', element:<Home/>},
    {path:'home',element:<Home/>},
    {path:'about',element:<About/>},
    {path:'portfolio',element:<Portfolio/>},
    {path:'contact',element:<Conatct/>},
    {path:'*',element:<Notfound/>}
    ]}
    ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
