import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Meeting from './pages/Meeting'; // Adjust the path as per your project structure
import Home from './pages/Home'; // Adjust the path as per your project structure

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();

  return (
    <div>
      {!location.pathname.startsWith('/meet') && <NavBar />}
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meet" element={<Meeting />} />
        </Routes>
      </React.Suspense>
      {!location.pathname.startsWith('/meet') && <Footer />}
    </div>
  );
}

export default App;
