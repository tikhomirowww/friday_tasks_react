import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddPost from './components/AddPost';
import Header from './components/Header';
import PostsList from './components/PostsList';

const MainRoutes = () => {
    return (
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/addPost' element={<AddPost />} />
            <Route path='/' element={<PostsList />} />
        </Routes>
        </BrowserRouter>
    )
}

export default MainRoutes