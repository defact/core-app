import React, { memo } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from'@material-ui/core/ListItemText';
import ListItemIcon from'@material-ui/core/ListItemIcon';
import { Menu as MenuIcon, ArrowUpward, ArrowDownward } from '@material-ui/icons';
import withStyles from '@material-ui/core/styles/withStyles';
import { usePopupState, bindTrigger, bindMenu } from 'material-ui-popup-state/hooks'

const styles = theme => ({
  button: {
    padding: theme.spacing.unit,
  },
  item: {
    outline: 0,
  },
  blank: {
    opacity: 0,
  },
});

export default withStyles(styles)(memo(({ id, sort, asc, desc, properties, classes }) => {
  const popup = usePopupState({ variant: 'popover', popupId: id });

  const sorts = Object.keys(properties).map(p => ({
    property: p, 
    label: properties[p], 
    action: () => sort.ascending ? desc(p) : asc(p),
  }));

  return (
    <>
      <IconButton className={classes.button} variant='contained' color='inherit' 
        {...bindTrigger(popup)}>
        <MenuIcon />
      </IconButton>

      <Menu {...bindMenu(popup)}>
        {sorts.map(({ property, action, label }, index) => 
          <span key={index} className={classes.item} onClick={popup.close}>
            <MenuItem onClick={action}>
              <ListItemIcon>
                {sort.property === property
                  ? sort.ascending ? <ArrowUpward /> : <ArrowDownward />
                  : <ArrowUpward className={classes.blank} />
                }
              </ListItemIcon>
              <ListItemText inset primary={label} />
            </MenuItem>
          </span>)}
      </Menu>
    </>
  );
}));