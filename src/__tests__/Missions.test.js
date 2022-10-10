import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Missions from '../components/missions/Missions';
import store from '../redux/configureStore';

describe('Missions component.', () => {
  test('Renders missions correctly.', () => {
    const missionsTest = render(
      <Provider store={store}>
        <Router>
          <Missions />
        </Router>
      </Provider>,
    );
    expect(missionsTest).toMatchSnapshot();
  });
});
