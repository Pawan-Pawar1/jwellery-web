import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Bracelets from './catagory/Bracelets'
import  Earings from './catagory/Earings'
import Rings from './catagory/Rings'
import Necklace from './catagory/Necklace'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  

  return (
    <>
    <BrowserRouter>
         <Navbar/>
         <Routes>
             <Route path="/" element={<Home/>} />
             <Route path='/bracelets' element={<Bracelets/>} /> 
             <Route path='/necklace' element={<Necklace/>} /> 
             <Route path='/earings' element={<Earings/>} /> 
             <Route path='/rings' element={<Rings/>} /> 
             
         </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
