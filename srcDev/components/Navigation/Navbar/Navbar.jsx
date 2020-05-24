import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import logo from '../../../assets/images/FS_Max_logo.png';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: theme.spacing(115),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    maxWidth: 160,
  },
});

class Navbar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position='static'>
          <Toolbar>
            <img src={logo} alt='logo' className={classes.logo} />
            <Button color='inherit' className={classes.menuButton}>
              Login
            </Button>
            <Button color='inherit'>Signup</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Navbar);
