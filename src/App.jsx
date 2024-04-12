import React from "react";

import {Route, Routes} from "react-router"

import Profilepage from "./pages/Profilepage/Profilepage"
import Homepage from "./pages/Homepage/Homepage";


const App = () =>{
  return (
    <Routes>
      <Route path="/home" element={<Homepage/>} />
      <Route path="/profile" element={<Profilepage/>}/>
    </Routes>
  )
}
export default App