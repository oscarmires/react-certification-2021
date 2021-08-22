import React from 'react';

import { render } from '@testing-library/react';
import {
  IsClientLoadedProvider,
  SearchKeywordProvider,
  SelectedVideoProvider,
} from '../global-context';
import { useHistory } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

export const renderWithContext = (elem) => {
  const context = (
    <IsClientLoadedProvider>
      <SearchKeywordProvider>
        <SelectedVideoProvider id="wrapper">{elem}</SelectedVideoProvider>
      </SearchKeywordProvider>
    </IsClientLoadedProvider>
  );

  return render(context);
};

export const renderWithRouter = (elem, route) => {
  window.history.pushState({}, 'Test page', route);

  return render(elem, { wrapper: BrowserRouter });
};
