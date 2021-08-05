import React from 'react';
import Switch from '@material-ui/core/Switch';

export default function MaterialuiSwitch({ activateDarkTheme }) {
  const [isEnabled, setIsEnabled] = React.useState(false);

  function handleSwitchChange(e) {
    activateDarkTheme(!isEnabled);
    if (isEnabled) {
      setIsEnabled(false);
    } else {
      setIsEnabled(true);
    }
  }

  return <Switch checked={isEnabled} onChange={handleSwitchChange} />;
}
