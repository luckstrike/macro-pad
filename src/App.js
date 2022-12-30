import HomeMacro from './components/HomeMacro.js';
import YouTubePage from './components/YouTubePage.js';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeMacro />} />
        <Route path="/youtube" element={<YouTubePage />} />
        <Route path="*" element={<h1>404 - Not Found!</h1>} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
