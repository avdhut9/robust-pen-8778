import { Route, Routes } from "react-router-dom";
// import Homepage from "../pages/Home/homepage";
import { Navigation } from "../Product/Sidebar/Navigation";


//  import SidebarWithHeader from "..src/components/Product/Sidebar/SidebarWithHeader"
export default function AllRoutes(){
   return( 
   <Routes>
    {/* <Route path="/" element={<Homepage/>}/> */}
    <Navigation/>
   </Routes>
   )
}
