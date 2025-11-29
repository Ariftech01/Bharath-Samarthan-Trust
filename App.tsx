import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Causes from './pages/Causes';
import Donate from './pages/Donate';
import Legal from './pages/Legal';
import Resources from './pages/Resources';
import Volunteer from './pages/Volunteer';
import Admin from './pages/Admin';

// Placeholder for missing pages to ensure link integrity
const Placeholder = ({ name }: { name: string }) => (
  <div className="py-20 text-center">
    <h1 className="text-3xl font-bold text-slate-400">Page: {name}</h1>
    <p className="text-slate-500 mt-2">Under construction.</p>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        
        {/* Main Layout Routes */}
        <Route path="*" element={
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/causes" element={<Causes />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/legal" element={<Legal />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/volunteer" element={<Volunteer />} />
              <Route path="/impact" element={<Placeholder name="Impact Stories" />} />
              <Route path="/contact" element={<Placeholder name="Contact Us" />} />
              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </Router>
  );
};

export default App;