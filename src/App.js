import React from 'react';
import MenuMakanan from './Page/MenuMakanan';
import Footer from './Page/Footer';
import Header from './Page/Header';
import MenuKontak from './Page/MenuKontak';
import MenuTentangKami from './Page/MenuTentangKami';

import './App.css';

function App() {
  return (
    <div>
    <Header />
    <MenuMakanan />
    <MenuTentangKami />
    <MenuKontak />
     <Footer />

    </div>
  );
}

export default App;
