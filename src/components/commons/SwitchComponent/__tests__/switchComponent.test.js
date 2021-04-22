import { render, fireEvent } from '@testing-library/react';
import Component from '../';

describe('SwitchComponent tests', () => {

  test('should render', () => {
    const status = true;
    const onClick = jest.fn();
    const { getByTestId } = render(<Component status={status} onClick={onClick} />);
    const switcher = getByTestId('switch');
    expect(switcher.className).toBe('switch-container active');
    fireEvent.click(switcher);
    expect(onClick).toBeCalled();
  });

  test('should render false state', () => {
    const status = false;
    const onClick = jest.fn();
    const { getByTestId } = render(<Component status={status} onClick={onClick} />);
    const switcher = getByTestId('switch');
    expect(switcher.className).toBe('switch-container ');
    fireEvent.click(switcher);
    expect(onClick).toBeCalled();
  });

});
