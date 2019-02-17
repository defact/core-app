import React, { memo } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
});

const Header = memo(({ classes, children, Icon }) => (
  <>
    <Avatar className={classes.avatar}>
      <Icon />
    </Avatar>
    <Typography component='h1' variant='h5'>
      {children}
    </Typography>
  </>
));

export default withStyles(styles)(Header);