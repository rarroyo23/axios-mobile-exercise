import React from 'react';
import TestRenderer from 'react-test-renderer';
import App from './App';

it('renders without crashing', () => {
  const testRenderer = TestRenderer.create(<App />);
  expect(testRenderer).toBeTruthy();
});
