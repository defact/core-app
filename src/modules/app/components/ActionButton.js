import React, { memo } from 'react';
import classnames from 'classnames';
import { Link } from '@reach/router';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  link: {
    textDecoration: 'none',
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

export default withStyles(styles)(memo(({ to, label, Icon, classes }) => (
  <Link to={to} className={classes.link}>
    <Button variant='contained' color='primary' size='small'>
      <Icon className={classnames(classes.leftIcon, classes.iconSmall)} />
      {label}
    </Button>
  </Link>
)));