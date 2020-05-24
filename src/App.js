import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import LandingPage from './components/LandingPage/LandingPage';
import Carousle from './components/LandingPage/promo/promo';

class App extends Component {
  render() {
    return (
      <Layout>
        {/* <LandingPage /> */}
        <Carousle />
      </Layout>
    );
  }
}

export default App;
