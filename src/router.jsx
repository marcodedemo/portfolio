import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contacts from './pages/Contacts';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
      <Route path="/contacts" element={<Contacts />} />

    </Routes>
  );
};

export default Router;