import React from 'react';
import ReactDOM from 'react-dom/client';
import HomeMacro from './components/HomeMacro.js';
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import YouTubePage from './components/YouTubePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeMacro />,
  },
  {
    path: "/youtube",
    element: <YouTubePage />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);