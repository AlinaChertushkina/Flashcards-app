import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import { data } from '../data/data';
import '../assets/styles/buttons.scss';
import { WordTable } from '../WordTable/WordTable';
import { FlashCards } from '../FlashCard/FlashCards';
import { Header } from '../Header/Header';
import { Logo } from '../Logo/Logo';
import { NotFound } from '../NotFound/NotFound';
import { AppProvider } from '../context/AppContext';

function App() {
  const [words] = useState(data);
  const [] = useState({
    english: '',
    transcription: '',
    russian: '',
    tags: '',
  });

  return (
    <div className="App">
      <AppProvider>
        <Router>
          <Header logo={<Logo />} />
          <Routes>
            <Route path="/" element={<WordTable />} />
            <Route path="/game" element={<FlashCards words={words} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AppProvider>
    </div>
  );
}

export { App };
