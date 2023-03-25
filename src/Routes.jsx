import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/home/Home';
import PostPage from './pages/postPage/PostPage';

const Pages = () => {
  const location = useLocation();

  const CheckLocation = () => {
    const location = useLocation()
    if (location.state && location.state.fromHome) {
      console.log('from home')
      return <Home />
    } else {
      console.log('from post')
      return <PostPage />
    }
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts/:id" element={CheckLocation()} />
    </Routes>
  );
};

export default Pages;