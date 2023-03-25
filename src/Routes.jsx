import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/home/Home';
import PostPage from './pages/postPage/PostPage';

const Pages = () => {
  // se o usuário inserir o link de um post diretamente na barra de endereços, ele será redirecionado para a página de posts
  // ao clicar no botão de comentários, o modal é aberto e o link do post irá para a barra de endereços, porém o usuário permanece na home 
  const CheckLocation = () => {
    const location = useLocation()
    if (location.state && location.state.fromHome) {
      return <Home />
    } else {
      return <PostPage />
    }
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts/:id" element={CheckLocation()} />
    </Routes>
  )
}

export default Pages;