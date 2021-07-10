
import './App.css';
import React from 'react';
import Navbars from './component/Navbar/Navbars'
import HomeCard from './component/HomeCard/HomeCard'
import Footer from './component/Footer/Footer'


import Kitsandcombos from './component/Kitsand combos/Kitsandcombos';

function App() {
  return (
    <>
      <Navbars/>
      <Kitsandcombos/>
      <HomeCard/>
      <Footer/>
    </>
  );
}

export default App;
