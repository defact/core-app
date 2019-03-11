import React, { memo } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import { Menu as MenuIcon } from '@material-ui/icons';
import { usePopupState, bindTrigger, bindMenu } from 'material-ui-popup-state/hooks'

import { MenuLink } from './';

export default memo(({ id, actions }) => {
  const popupState = usePopupState({ variant: 'popover', popupId: id });

  return (
    <>
      <IconButton variant='contained' color='inherit' {...bindTrigger(popupState)}>
        <MenuIcon />
      </IconButton>

      <Menu {...bindMenu(popupState)}>
        {actions.map(action => <MenuLink to={action.to} onClick={popupState.close}>{action.label}</MenuLink>)}
      </Menu>
    </>
  );
});