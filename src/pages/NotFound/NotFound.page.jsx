import React from 'react';
import { useActiveDropdown } from '../../global-context';

import {
  NotFoundContainer,
  NotFoundInfoArea,
  NotFoundTitle,
} from './NotFound.components';

function NotFound() {
  const { setActiveDropdown } = useActiveDropdown();

  const closeDropdowns = (e) => {
    setActiveDropdown('');
  };

  return (
    <NotFoundContainer onClick={closeDropdowns}>
      <NotFoundInfoArea>
        <NotFoundTitle>404 - Not found!</NotFoundTitle>
        <p>The requested page can't be loaded because it was not found.</p>
      </NotFoundInfoArea>
    </NotFoundContainer>
  );
}

export default NotFound;
