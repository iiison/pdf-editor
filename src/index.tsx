import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Route,
  Routes,
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import './index.css';
import App from './App';
import Dashboard from './components/Dashboard'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import reportWebVitals from './reportWebVitals';
import PdfResume from './components/PdfResume/PdfResume'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter([ 
  {
    path: '/',
    element: <Dashboard />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/tasks',
    element: <Dashboard />
  },
  {
    path: '/jobs',
    element: <Dashboard />
  },
  {
    path: '/edit-resume',
    element: <Dashboard />
  }
])

root.render(
  <React.StrictMode>
    <div className="w-full h-full bg-mirage-950 text-white font-light pt-[67px]">
      <BrowserRouter>
        <Header />
        <div className="flex w-full h-full bg-mirage-950">
          <div className="px-7 py-4 flex w-full">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/tasks" element={<Dashboard />} />
              <Route path="/jobs" element={<Dashboard />} />
              <Route path="/pdf-resume" element={<PdfResume />} />
              <Route path="/" index={true} element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
