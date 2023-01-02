import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Video from './pages/Video';

function App() {
  return (
    <>
      <Navbar />

      {/* Router setup */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/videos/:videoId' element={<Video />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
