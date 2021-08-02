import React from 'react';
import Switch from '@material-ui/core/Switch';

export default function MaterialuiSwitch({ inputProps }) {
  const [state, setState] = React.useState(false);

  function handleSwitchChange(e) {
    setState(e.target.checked);
  }

  return <Switch checked={state} onChange={handleSwitchChange} inputProps={inputProps} />;
}
