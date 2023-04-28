import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Home from './components/Home';
import Logistics from './components/Logistics';
import RSVP from './components/RSVP';
import Registry from './components/Registry';
import NotFound from './components/NotFound';
import Layout from './components/Layout';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="logistics" element={<Logistics />} />
        <Route path="rsvp" element={<RSVP />} />
        <Route path="registry" element={<Registry />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
