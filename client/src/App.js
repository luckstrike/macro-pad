import HomeMacro from './components/HomeMacro.js';
import YouTubePage from './components/YouTubePage.js';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  // TODO: Add in dummy buttons that mimic a function key (like F1, F2, etc.)
  // Could build out an API that sends this data to the server which then actually does
  // Have a JS function that does this using the onClick event!

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeMacro />} />
        <Route path="/youtube" element={<YouTubePage />} />
        <Route path="/spotify" element={<h1>Spotify, currently no component though</h1>} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
