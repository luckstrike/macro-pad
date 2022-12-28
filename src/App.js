import HomeMacro from './components/HomeMacro.js';
import YouTubePage from './components/YouTubePage.js';
import './App.css';
import React, { useState } from 'react';

function Page({page}) {
  // Deals with what page should be rendered
  if (page == 'home') {
    return <HomeMacro />
  } else if (page === 'youtube') {
    return <YouTubePage />
  }
}

function App() {
  const [page, setPage] = useState('home');

  return (
    <div>
      <Page page={page}/> 
    </div>
  )
};

export default App;
