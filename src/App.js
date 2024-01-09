import React from "react";
import Navbar from "./Component/Navbar";
import Card from "./Component/Card";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Allpost from "./Component/Allpost";
import Editpost from "./Component/Editpost";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>

      <Route exact path="/" element={<Card/>}></Route>
      <Route exact path="/read" element={<Allpost/>}></Route>
      <Route exact path="/edit/:id" element={<Editpost/>}></Route>


    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
   