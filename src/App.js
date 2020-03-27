import React from "react";
import MainNavBar from "./components/MainNavBar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <MainNavBar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
