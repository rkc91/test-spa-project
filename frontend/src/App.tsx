import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import ContactUsPage from './pages/ContactUsPage';
import EventsPage from './pages/EventsPage';
import JoinUsPage from './pages/JoinUsPage';
import RosterPage from './pages/RosterPage';
import StorePage from './pages/StorePage';
import StreamsPage from './pages/StreamsPage';
import Navbar from './components/Navbar';
import './styling/App.css';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
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
    </>
  );
}

export default App;