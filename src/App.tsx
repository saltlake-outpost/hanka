import React from 'react';
import {Header} from "./layout/header";
import {Footer} from "./layout/footer";
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/home";
import {AboutUs} from "./pages/about-us";
import {Services} from "./pages/services";
import {Projects} from "./pages/projects";
import {Careers} from "./pages/careers";
import {ContactUs} from "./pages/contact-us";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/about-us'} element={<AboutUs/>}/>
                <Route path={'/services'} element={<Services/>}/>
                <Route path={'/projects'} element={<Projects/>}/>
                <Route path={'/careers'} element={<Careers/>}/>
                <Route path={'/contact-us'} element={<ContactUs/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
