import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import MyRockets from '../components/rockets/rocket';
import store from '../redux/configureStore';

describe('Performing rocket Test.', () => {
  test('rocket snapshot.', () => {
    const rockTest = render(
      <Provider store={store}>
        <Router>
          <MyRockets />
        </Router>
      </Provider>,
    );
    expect(rockTest).toMatchSnapshot();
  });
});
