import React, { memo } from 'react';
import { Link, Match } from '@reach/router';
import MenuItem from '@material-ui/core/MenuItem';

const MenuLink = memo(({ children, onClick, ...props }) => (
  <Match path={props.to}>
    {({ match }) => (
      <Link {...props} getProps={() => 
        ({ style: { 
          textDecoration: 'none', 
          outline: 0,
        }})}>
        <MenuItem onClick={onClick} selected={match !== null}>
          {children}
        </MenuItem>
      </Link>
    )}
  </Match>  
));

export default MenuLink;