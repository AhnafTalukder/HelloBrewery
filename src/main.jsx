import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailView from './routes/DetailView';
import Layout from './routes/Layouts.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
        <Route index={true} path="/" element={<App />} />
        <Route index={true} path="/breweryDetails/:id" element={<DetailView />} />
        </Route>
      </Routes>
    </BrowserRouter>
   
  </React.StrictMode>,
)
