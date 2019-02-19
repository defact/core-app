import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { Extension } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  footer: {
    display: 'none',
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
});

const Footer = ({ classes }) => {
  return (
    <footer className={classes.footer}>
      <Typography variant='h6' align='center' gutterBottom>
        Defacto
      </Typography>
      <Typography variant='subtitle1' align='center' color='textSecondary' component='p'>
        &copy; Johnny Hall 2019
      </Typography>
    </footer>  
  );
};

export default withStyles(styles)(Footer);