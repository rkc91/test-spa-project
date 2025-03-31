import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/index.css';
import './App.css';

import HomePage from '../page_views/HomePage/HomePage';
import AboutPage from '../page_views/AboutPage';
import NotFoundPage from '../page_views/NotFoundPage';
import ContactUsPage from '../page_views/ContactUsPage';
import EventsPage from '../page_views/EventsPage';
import JoinUsPage from '../page_views/JoinUsPage';
import RosterPage from '../page_views/RosterPage';
import StorePage from '../page_views/StorePage';
import StreamsPage from '../page_views/StreamsPage';
import MyNavbar from '../Navbar/Navbar';





const App: React.FC = () => {
  return (
    <>
      <header>
        <MyNavbar />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/contact-us' element={<ContactUsPage/>} />
          <Route path='/events' element={<EventsPage/>} />
          <Route path='/join-us' element={<JoinUsPage/>} />
          <Route path='/roster' element={<RosterPage/>} />
          <Route path='/store' element={<StorePage/>} />
          <Route path='/streams' element={<StreamsPage/>} />
          <Route path='/*' element={<NotFoundPage/>} />
        </Routes>
      </main>
      <footer>
        <p>© 2025 Horizon Initiative. All rights reserved.</p> 
      </footer> 
    </>
  );
}

export default App;