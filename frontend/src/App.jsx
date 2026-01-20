import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Bracelets from './catagory/Bracelets'
import AddProduct from './catagory/AddProduct'
import BraceletDetail from './catagory/BraceletDetail'

import  Earings from './catagory/Earings'
import Rings from './catagory/Rings'
import Necklace from './catagory/Necklace'
import About from './components/Footer'
import PrivacyPolicy from './about/PrivacyPolicy'
import TermsAndConditions from './about/TermsAndConditions'
import HelpAndFAQ from './about/Help'
import AboutUs from './about/AboutUs'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  

  return (
    <>
    <BrowserRouter>
         <Navbar/>
         <Routes>
             <Route path="/" element={<Home/>} />
             <Route path='/bracelets' element={<Bracelets/>} /> 
             <Route path='/bracelets/:id' element={<BraceletDetail/>}/>
                <Route path='/bracelets/addFile' element={<AddProduct/>}></Route>
             
             <Route path='/necklace' element={<Necklace/>} /> 
             <Route path='/earings' element={<Earings/>} /> 
             <Route path='/rings' element={<Rings/>} /> 
             <Route path='/terms' element={<TermsAndConditions/>}/>
             <Route path='/privacy' element={<PrivacyPolicy/>}/>
             <Route path='/help' element={<HelpAndFAQ/>}/>
             <Route path='/about' element={<AboutUs/>}/>

         </Routes>
         <About />
    </BrowserRouter>
    </>
  )
}

export default App
