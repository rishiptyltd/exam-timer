import { BrowserRouter, Routes, Route, } from "react-router-dom";
import React from 'react';
import Create from './pages/Add'
import Help from './pages/Help';
import Home from './pages/Home';

export default function App()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='create' element={<Create />} />
                <Route path='help' element={<Help />} />
            </Routes>
        </BrowserRouter>
    );
}
