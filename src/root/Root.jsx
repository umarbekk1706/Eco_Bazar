import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Shop from "../pages/shop/Shop";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Not_found from "../pages/not_found/Not_found";

function Root() {
  return (
    <div>
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/shop" element={<Shop/>}/>
           <Route path="/about" element={<About/>}/>
           <Route path="/contact" element={<Contact/>}/>
           <Route path="*" element={<Not_found/>}/> 
        </Routes>
    </div>
  )
}

export default Root;