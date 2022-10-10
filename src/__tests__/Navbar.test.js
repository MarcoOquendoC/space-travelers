import React from 'react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Navigation from '../components/Navbar';

describe('Test for Navbar component', () => {
  it('Renders Navbar correctly', () => {
    const navbar = render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>,
    );
    expect(navbar).toMatchSnapshot();
  });

  it('Check for heading in the navbar \'Space Traveler\'s Hub\' is in the document', () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>,
    );
    expect(
      screen.getByRole('heading', { name: /Space Travelers' Hub/i }),
    ).toBeInTheDocument();
  });
});
