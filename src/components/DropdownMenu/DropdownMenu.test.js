import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MenuItem } from './DropdownMenu.components';

describe('DropdownMenu', () => {
  it('calls history push on a navigation element click', () => {
    const history = { push: jest.fn() };
    const callback = (e) => {
      history.push('/route');
    };
    render(<MenuItem onClick={callback} data-testid="menu-item" />);
    const menuItem = screen.getByTestId('menu-item');

    fireEvent.click(menuItem);

    expect(history.push).toBeCalled();
  });
});
