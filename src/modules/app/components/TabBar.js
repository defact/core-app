import React, { memo } from 'react';
import classnames from 'classnames';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import { Link } from '@reach/router';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { withTheme } from '@material-ui/core/styles';

import { ActionMenu } from './';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  link: {
    textDecoration: 'none',
    color: 'rgba(0,0,0,0.5)',
    marginLeft: theme.spacing.unit,
  },
  selected: {
    color: theme.palette.secondary.main,
  },
  text: {
    display: 'inline-block',
    verticalAlign: 'text-bottom'
  },
  separator: {
    paddingLeft: theme.spacing.unit,
    borderLeft: `1px solid ${theme.palette.divider}`,
  },
});

const NavLink = withStyles(styles)(props => (
  <Link to={props.to} children={props.children}
    getProps={({ isCurrent }) => ({
      className: classnames(props.classes.link, isCurrent && [props.classes.selected], props.index !== 0 && [props.classes.separator])
    })}
  />
));

const TabBar = withStyles(styles)(withTheme()(({ id, tabs, actions, classes, theme }) => {
  const expandTabs = !useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Paper className={classes.root}>
      <div>
        {expandTabs && 
          <Typography variant='body1'>
            {tabs.map((tab, index) => {
              return (
                <NavLink key={index} index={index} to={tab.to}>
                  <span className={classes.text}>{tab.label}</span>
                </NavLink>
              );
            })}
          </Typography>}
        {!expandTabs && <ActionMenu id={`${id}-tabs`} actions={tabs} showSelectedLink={true} />}
      </div>
      <div>
        <ActionMenu id={`${id}-actions`} actions={actions} showSelectedLink={true} />
      </div>
    </Paper>
  );
}));

export default TabBar;