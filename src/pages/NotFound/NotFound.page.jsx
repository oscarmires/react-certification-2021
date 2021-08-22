import React from 'react';

import {
  NotFoundContainer,
  NotFoundInfoArea,
  NotFoundTitle,
} from './NotFound.components';

function NotFound() {
  return (
    <NotFoundContainer>
      <NotFoundInfoArea>
        <NotFoundTitle>404 - Not found!</NotFoundTitle>
        <p>The requested page can't be loaded because it was not found.</p>
      </NotFoundInfoArea>
    </NotFoundContainer>
  );
}

export default NotFound;
