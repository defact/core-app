import React, { memo, useState } from 'react';
import { Link } from '@reach/router';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const TabBar = memo(({ selected, tabs }) => {
  const [ tab, setTab ] = useState(selected);

  const handleChange = (e, t) => setTab(t);

  console.log(selected);

  return (
    <Paper>
      <Tabs value={tab} onChange={handleChange}>
        {tabs.map(t => <Tab {...t} component={Link} value={t.to} key={t.to} />)}
      </Tabs>
    </Paper>
  );
});

export default TabBar;