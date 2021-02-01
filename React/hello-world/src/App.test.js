import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Application from './UseOfState';
//react testing library Jest

afterEach(cleanup);
//test to check if counter initial value is 0
  it('should equal to 0', () => {
    const { getByTestId } = render(<Application />); 
    expect(getByTestId('counter')).toHaveTextContent(0)
   });

//test to check if decrease button is enabled
it('should be enabled', () => {
  const { getByTestId } = render(<Application />);
  expect(getByTestId('decrease')).not.toHaveAttribute('disabled')
});

//test to check if increase button is enabled
it('should be enabled', () => {
  const { getByTestId } = render(<Application />);
  expect(getByTestId('increase')).not.toHaveAttribute('disabled')
});

//test to check increse event functionality
it('increments counter', () => {
  const { getByTestId } = render(<Application />); 
  fireEvent.click(getByTestId('increase'))
  expect(getByTestId('counter')).toHaveTextContent('1')
});

//test to check decrease event functionality
it('increments counter', () => {
  const { getByTestId } = render(<Application />); 
  fireEvent.click(getByTestId('decrease'))
  expect(getByTestId('counter')).toHaveTextContent('-1')
});


  