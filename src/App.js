import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Missions from './components/missions/Missions';

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
            <Route path="/missions" element={<Missions />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
