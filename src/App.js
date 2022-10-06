import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import missions from './components/missions/missions';
import MyProfile from './components/MyProfile/MyProfile';
import MyRockets from './components/rockets/rocket';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="nav">
          <Navbar />
          <hr />
        </div>
        <section className="content">
          <Routes>
            <Route path="/" element={<MyRockets />} />
            <Route path="/rockets" exact element={<MyRockets />} />
            <Route path="/missions" element={<missions />} />
            <Route path="/dragons" element={<dragons />} />
            <Route path="/MyProfile" element={<MyProfile />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
