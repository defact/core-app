import React, { memo } from 'react';
import classnames from 'classnames';
import { Helmet } from 'react-helmet';
import { Link } from '@reach/router';
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
});

const title = parts => {
  return parts.reduce((memo, part) => {
    return [ part.label, memo ].join(' | ');
  }, '');
};

const Breadcrumbs = withStyles(styles)(memo(({ parts, action, classes }) => (
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
        {action}
      </div>
    </div>
  </>
)));

export default Breadcrumbs;