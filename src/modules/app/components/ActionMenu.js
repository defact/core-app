import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Menu as MenuIcon } from '@material-ui/icons';
import withStyles from '@material-ui/core/styles/withStyles';
import { usePopupState, bindTrigger, bindMenu } from 'material-ui-popup-state/hooks'

import { MenuLink, Question } from './';

const styles = theme => ({
  button: {
    padding: theme.spacing.unit,
  },
  item: {
    outline: 0,
  },
});

const ConfirmedMenuItem = memo(({ action, disabled, children }) => {
  const [ open, setOpen ] = useState(false);

  const confirm = () => setOpen(true);
  const dismiss = () => setOpen(false);
  const accept = () => {
    dismiss();
    action();
  };

  return (
    <>
      <MenuItem onClick={action} disabled={disabled}>{children}</MenuItem>
      <Question open={open} accept={accept} dismiss={dismiss} label={children} />
    </>
  );
});

const Item = memo(({ to, label, disabled, action }) => {
  return action
    ? <ConfirmedMenuItem disabled={disabled} action={action}>{label}</ConfirmedMenuItem>
    : <MenuLink to={to}>{label}</MenuLink>;
});

export default withStyles(styles)(memo(({ id, disabled, actions, classes }) => {
  const popup = usePopupState({ variant: 'popover', popupId: id });

  return (
    <>
      <IconButton className={classes.button} variant='contained' color='inherit' 
        disabled={disabled} {...bindTrigger(popup)}>
        <MenuIcon />
      </IconButton>

      <Menu {...bindMenu(popup)}>
        {actions.map((action, index) => 
          <span key={index} className={classes.item} onClick={popup.close}>
            <Item {...action} disabled={disabled} />
          </span>)}
      </Menu>
    </>
  );
}));