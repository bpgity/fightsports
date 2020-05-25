import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import logo from '../../../assets/images/FS_Max_logo.png';
import backArrow from '../../../assets/images/back-arrow.png';
import Typography from '@material-ui/core/Typography';
import Login from '../Header/Login/Login';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: theme.spacing(6),
  },
  title: {
    flexGrow: 1,
    /* marginLeft: theme.spacing(15), */
  },
});

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position='fixed'>
          <Toolbar>
            <img src={backArrow} alt='arrow' />
            <Button color='inherit'>BACK TO FIGHTSPORTS.TV</Button>
            <Typography variant='h6' className={classes.title}></Typography>
            <img src={logo} alt='logo' className={classes.logo} />
            <Typography variant='h6' className={classes.title}></Typography>
            <Login />
            <Button color='inherit'>Signup</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Header);
