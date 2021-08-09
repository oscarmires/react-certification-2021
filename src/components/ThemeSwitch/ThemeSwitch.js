import React from 'react';
import Switch from '@material-ui/core/Switch';

export default function MaterialuiSwitch({ toggleTheme, darkThemeEnabled }) {
  async function handleSwitchChange(e) {
    await toggleTheme();
  }

  return <Switch checked={darkThemeEnabled} onChange={handleSwitchChange} />;
}
