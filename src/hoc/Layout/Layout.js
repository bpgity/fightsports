import React, { Component } from 'react';
import Aux from '../Auxillary/Auxillary';
import Header from '../../components/Navigation/Header/Header';
import CSIImg from '../../assets/images/HomeCSI.jpg';
import classes from './Layout.module.css';
import Footer from '../../components/Navigation/Footer/Footer';

class Layout extends Component {
  render() {
    return (
      <Aux>
        <Header />
        <main>{this.props.children}</main>
        <img src={CSIImg} alt='logo' className={classes.landingPageImg} />
        <Footer />
      </Aux>
    );
  }
}

export default Layout;
