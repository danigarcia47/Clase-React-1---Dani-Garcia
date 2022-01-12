import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Home } from '.components/Home';
import { PaginaListas } from './components/PaginaListas';
import { Perfil } from '.components/Perfil';
import Header from '.components/Header';
import {MenuItems} from './data/MenuItems';

function createRoutes() {
  const listRoutes = [];
  for (let i = 0; i < MenuItems.length; i++) {
    <Route path = {MenuItems[i].path} exact component={MenuItems[i].component} />
  };
  return listRoutes;
}

export function App() {
  return (
  <Router>
    <Header />
    {/* Metodo con For
    {createRoutes()}
    */}

    {/* Metodo con map */}
    {MenuItems.map(function createRoute(item) {
      return (
        <Route path = {item.path} exact component={item.component} />)
    })}
  </Router>
  );
}
