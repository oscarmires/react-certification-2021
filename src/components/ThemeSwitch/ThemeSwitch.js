import React from 'react';
import Switch from '@material-ui/core/Switch';

import { useThemeState } from '../../global-context';

export default function MaterialuiSwitch() {
  const { themeState, dispatchThemeState } = useThemeState();

  return (
    <Switch
      checked={themeState.isDark}
      onChange={() => {
        dispatchThemeState({ type: 'toggle' });
      }}
    />
  );
}
