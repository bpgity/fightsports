import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
});

const Copyright = () => {
  return (
    <Typography variant='body2' color='textSecondary'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

const footer = (props) => {
  const { classes } = props;
  return (
    <div>
      <footer className={classes.footer}>
        <Typography variant='body1'>
          All content © Copyright MM - MMXVII FIGHTSPORTSMAX. All Rights
          Reserved.
        </Typography>
        <Copyright />
      </footer>
    </div>
  );
};

export default withStyles(styles)(footer);
