/* eslint-disable */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dragons from './components/Dragon';
import Missions from './components/Missions';
import Rockets from './components/Rockets'
import MyProfile from './components/MyProfile';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/Missions" element={<Missions />} />
          <Route path="/Dragons" element={<Dragons />} />
          <Route path="/Myprofile" element={<MyProfile />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;
