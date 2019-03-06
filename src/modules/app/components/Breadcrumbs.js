import React, { memo } from 'react';
import classnames from 'classnames';
import { Helmet } from 'react-helmet';
import { Link } from '@reach/router';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.unit * 2,
  },
  link: {
    textDecoration: 'none',
  },
  secondary: {
    color: 'rgba(0,0,0,0.5)',
  },
  text: {
    display: 'inline-block',
    verticalAlign: 'text-bottom'
  },
  separator: {
    marginLeft: theme.spacing.unit,
    paddingLeft: theme.spacing.unit,
    borderLeft: `1px solid ${theme.palette.divider}`,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

const title = parts => {
  return parts.reduce((memo, part) => {
    return [ part.label, memo ].join(' | ');
  }, '');
};

const Breadcrumbs = withStyles(styles)(memo(({ parts, actions = [], classes }) => (
  <>
    <Helmet title={title(parts)} />
    <div className={classes.root}>
      <div>
        <Typography variant='h6'>
          {parts.map((part, index) => {
            if (index === parts.length-1)
              return (
                <span key={index} className={classnames(classes.text, index !== 0 && [classes.separator])}>
                  {part.label}
                </span>
              );

            return (
              <Link key={index} className={classnames(classes.link, classes.secondary)} to={part.to}>
                <span className={classes.text}>{part.label}</span>
              </Link>
            );
          })}
        </Typography>
      </div>
      <div>
        {actions.map(({ label, to, Icon }, index) => (
          <Link to={to} className={classes.link} key={index}>
            <Button variant='contained' color='secondary' size='small'>
                <Icon className={classnames(classes.leftIcon, classes.iconSmall)} />
                {label}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  </>
)));

export default Breadcrumbs;