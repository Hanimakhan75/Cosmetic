import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Navbar />
      <Hero/>  
      <Products />
      <Services />
      <Contact />
      <Footer/>
      
      {/* <h1>Hello, React is Working!</h1> */}
    </div>
  );
}


export default App;