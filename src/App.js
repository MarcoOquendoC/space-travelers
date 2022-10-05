/* eslint-disable */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dragons from './components/Dragon';
import Missions from './components/missions/Missions';
import Rockets from './components/Rockets'
import MyProfile from './components/MyProfile';
import Navigation from './components/Navbar';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Rockets />} />
            <Route path="/Missions" element={<Missions />} />
            <Route path="/Dragons" element={<Dragons />} />
            <Route path="/Myprofile" element={<MyProfile />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
