import React, { memo, useState } from 'react';
import { Link } from '@reach/router';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const TabBar = memo(({ tabs }) => {
  const [ value, setValue ] = useState(0);

  const handleChange = (e, value) => setValue(value);

  return (
    <Paper>
      <Tabs value={value} onChange={handleChange}>
        {tabs.map(tab => <Tab {...tab} component={Link} key={tab.to} />)}
      </Tabs>
    </Paper>
  );
});

export default TabBar;