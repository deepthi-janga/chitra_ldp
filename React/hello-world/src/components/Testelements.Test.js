import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Application from '../UseOfState'

afterEach(cleanup);

  it('should equal to 0', () => {
    const { getByTestId } = render(<Application />); 
    expect(getByTestId('counter')).toHaveTextContent(0)
   });