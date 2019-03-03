import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { navigate } from '@reach/router';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Add } from '@material-ui/icons';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.unit * 2,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

const Header = memo(({ classes }) => {
  const navigateToAdd = () => navigate('/manage/roles/add');

  return (
    <div className={classes.topBar}>
      <div>
        <Typography variant='h6' gutterBottom>
          Roles
        </Typography>
      </div>
      <div>
        <Button variant='contained' color='secondary' size='small' onClick={navigateToAdd}>
          <Add className={classnames(classes.leftIcon, classes.iconSmall)} />
          Add Role
        </Button>
      </div>
    </div>
  );
});

export default withStyles(styles)(Header);
