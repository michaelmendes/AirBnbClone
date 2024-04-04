import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import { NavMenu } from './components/NavMenu';
import { Hero } from './components/Hero'
import Card from './components/Card'
import data from './components/data'

import './custom.css';

const cards = data.map(pic => {
  return (
    <Card
      key={pic.id}
      item={pic}
    />
  )
})

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <div>
        <NavMenu />
        <Hero />
        <section className="cards-list">
          {cards}
        </section>
      </div>
    );
  }
}
