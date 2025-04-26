import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useLoaderData } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/index.css';
import './App.css';

import HomePage from '../page_views/HomePage/HomePage';
import NotFoundPage from '../page_views/NotFoundPage';
import ContactUsPage from '../page_views/ContactUsPage';
import EventsPage from '../page_views/EventsPage';
import RosterPage from '../page_views/RosterPage';
import StorePage from '../page_views/StorePage';
import StreamsPage from '../page_views/StreamsPage';
import MyNavbar from '../Navbar/Navbar';

import { useState } from 'react';




const App: React.FC = () => {

  const location = useLocation();

  const [ carouselIndex, setCarouselIndex ] = useState<number>(() => {
    const savedCarouselIndex = localStorage.getItem("carouselIndex");
    return savedCarouselIndex !== null ? parseInt(savedCarouselIndex, 10) : 0;
  });
  
  const handleCarouselIndexChange = ( index : number) => {
    setCarouselIndex(index);
    console.log("Carousel index changed: ", index);
    localStorage.setItem("carouselIndex", index.toString());
  }

  useEffect(() => {
    // prevent 3 home page links from highlighting when not on splash page.
    if (location.pathname !== "/") {
      setCarouselIndex(-1);
    }
  }, [location]);

  return (
    <>
      <header>
        <MyNavbar handleCarouselIndexChange={handleCarouselIndexChange} carouselIndex={carouselIndex} />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomePage 
          carouselIndex={carouselIndex}
          onCarouselChange={handleCarouselIndexChange}/>} />
          <Route path='/contact-us' element={<ContactUsPage/>} />
          <Route path='/events' element={<EventsPage/>} />
          <Route path='/roster' element={<RosterPage/>} />
          <Route path='/store' element={<StorePage/>} />
          <Route path='/streams' element={<StreamsPage/>} />
          <Route path='/*' element={<NotFoundPage/>} />
        </Routes>
      </main>
      <footer>
        <p>© 2025 Ryan Casey. All rights reserved.</p> 
      </footer> 
    </>
  );
}

export default App;