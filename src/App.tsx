import React from 'react';
import {Menu} from "./layout/menu";
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/home";

function App() {
  return (
    <>
      <Menu/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
