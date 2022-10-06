import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Missions from './components/missions/Missions';
import MyProfile from './components/MyProfile/MyProfile';
import MyRockets from './components/rockets/rocket';
import Dragons from './components/dragons/AllDragons';
import './App.css';

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
            <Route path="/missions" element={<Missions />} />
            <Route path="/dragons" element={<Dragons />} />
            <Route path="/MyProfile" element={<MyProfile />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
