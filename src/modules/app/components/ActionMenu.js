import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from '@reach/router';
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
  link: {
    display: 'inline',
    textDecoration: 'none',
    color: 'rgba(0,0,0,0.5)',
    fontSize: '1rem',
  },
  selected: {
    color: theme.palette.secondary.main,
  },
  text: {
    display: 'inline-block',
    verticalAlign: 'text-bottom',
    ...theme.typography.body1,
    color: 'inherit',
    lineHeight: undefined,
  },
  item: {
    outline: 0,
  },
});

const SelectedLink = withStyles(styles)(({ actions, classes }) => {
  return actions.map(({ to, label, action }, index) => {
    return (
      action === undefined
      ? <Link to={to} key={index}
          getProps={({ isCurrent }) => ({
            className: classnames(classes.link, classes.selected),
            style: { display: isCurrent || actions.length === 1 ? 'inline': 'none' },
          })}
        >
          <span className={classes.text}>{label}</span>
        </Link>
      : null
    );
  })
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

export default withStyles(styles)(memo(({ id, disabled, actions = [], showSelectedLink=false, classes }) => {
  const popup = usePopupState({ variant: 'popover', popupId: id });

  return (
    <>
      {(showSelectedLink || actions.length === 1) && <SelectedLink actions={actions} />}
      {actions.length > 1 &&
        <IconButton className={classes.button} variant='contained' color='inherit' 
          disabled={disabled} {...bindTrigger(popup)}>
          <MenuIcon />
        </IconButton>}

      <Menu {...bindMenu(popup)}>
        {actions.map((action, index) => 
          <span key={index} className={classes.item} onClick={popup.close}>
            <Item {...action} disabled={disabled} />
          </span>)}
      </Menu>
    </>
  );
}));