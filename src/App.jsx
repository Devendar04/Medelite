import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LanguageSelectionPage from './components/LanguageSelectionPage';
import EnglishOptionsPage from './components/EnglishOptionsPage';
import HindiOptionsPage from './components/HindiOptionsPage'; 

const App = () => {
  return (  
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/language" element={<LanguageSelectionPage />} />
        <Route path="/EnglishOptionsPage" element={<EnglishOptionsPage />} />
        <Route path="/HindiOptionsPage" element={<HindiOptionsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
