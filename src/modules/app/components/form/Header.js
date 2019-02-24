import React, { memo, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Autorenew } from '@material-ui/icons';
import withStyles from '@material-ui/core/styles/withStyles';

const injectStyle = rule => {
  const style = document.createElement('style');
  document.head.appendChild(style);
  style.sheet.insertRule(rule, 0);
};

const rotateKeyframes = `
  @keyframes rotate360 { 
    0% { transform: rotate(0deg) } 
    100% { transform: rotate(359deg) }
  }`;

const styles = theme => ({
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  rotate: {
    animation: 'rotate360 1s infinite linear',
    transformOrigin: '50% 50%',
  }
});

const Header = memo(({ classes, children, isSubmitting, Icon }) => {
  useEffect(() => injectStyle(rotateKeyframes), []);  

  return (
    <>
      <Avatar className={classes.avatar}>
        {!isSubmitting && <Icon />}
        {isSubmitting && <Autorenew className={classes.rotate} />}
      </Avatar>
      <Typography component='h1' variant='h5'>
        {children}
      </Typography>
    </>
  );
});

export default withStyles(styles)(Header);