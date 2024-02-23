import React from "react";
import { Route, Routes } from "react-router-dom";
import Content from "./components/Content";
import Contact from "./components/Contact";
import TableData from "./components/TableData";
import Page404 from "./components/Page-404";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import Auth from "./components/AdminDashbord/Auth";


function App() {
  return (
    <>
      <HelmetProvider>
        <div className="NotoSansThaiLooped-Medium">
          <Nav />
          <Routes>
            <Route exact path="/" element={<Content />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tabledata" element={<TableData />} />
            <Route path="/auth" element={<Auth/>} />
            <Route path="*" element={<Page404 />} />
          </Routes>
          <Footer />
        </div>
      </HelmetProvider>
    </>
  );
}

export default App;
