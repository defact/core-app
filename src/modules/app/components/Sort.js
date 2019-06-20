import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from'@material-ui/core/ListItemText';
import ListItemIcon from'@material-ui/core/ListItemIcon';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
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
  icon: {
    marginRight: 0,
  },
  message: {
    lineHeight: 1.5,
    cursor: 'pointer',
  },
  text: {
    paddingLeft: theme.spacing.unit, 
    verticalAlign: 'top'
  },
});

const Selected = memo(({ sort, trigger, onClick, classes }) => {
  return (
    <Typography 
      variant='subtitle1' 
      component='p' 
      className={classes.message}
      onClick={onClick} 
      {...trigger}
    >
      {sort.ascending ? <ExpandLess /> : <ExpandMore />}
      <span className={classes.text}>{sort.label}</span>
    </Typography>
  );
});

export default withStyles(styles)(memo(({ id, sort, asc, desc, properties, classes }) => {
  const popup = usePopupState({ variant: 'popover', popupId: id });

  const sorts = Object.keys(properties).map(p => ({
    property: p, 
    label: properties[p], 
    ascending: sort.ascending,
    action: () => sort.ascending ? desc(p) : asc(p),
  }));

  const selected = sorts.find(s => s.property === sort.property);
  const trigger = sorts.length > 1 ? bindTrigger(popup) : {};
  const action = sorts.length === 1 ? selected.action : undefined;

  return (
    <>
      <Selected sort={selected} classes={classes} trigger={trigger} onClick={action} />

      <Menu {...bindMenu(popup)}>
        {sorts.map(({ property, action, label }, index) => 
          <span key={index} className={classes.item} onClick={popup.close}>
            <MenuItem onClick={action}>
              <ListItemIcon className={classes.icon}>
                {sort.property === property
                  ? sort.ascending ? <ExpandLess /> : <ExpandMore />
                  : <ExpandLess className={classes.blank} />
                }
              </ListItemIcon>
              <ListItemText inset primary={label} />
            </MenuItem>
          </span>)}
      </Menu>
    </>
  );
}));