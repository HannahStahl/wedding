import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Logistics from './components/Logistics';
import Story from './components/Story';
import RSVP from './components/RSVP';
import Registry from './components/Registry';
import ThingsToDo from './components/ThingsToDo';
import NotFound from './components/NotFound';
import Layout from './components/Layout';
import Leaves from './components/Leaves';
import Lines from './components/Lines';

const Pages = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="logistics" element={<Logistics />} />
        <Route path="story" element={<Story />} />
        <Route path="rsvp" element={<RSVP />} />
        <Route path="registry" element={<Registry />} />
        <Route path="things-to-do" element={<ThingsToDo />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

const App = () => (
  <>
    <Leaves />
    <Lines />
    <div className="app-container">
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </div>
  </>
);

export default App;
