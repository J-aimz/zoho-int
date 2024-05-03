// import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Zoho from './pages/Zoho' 

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/zoho'} element={<Zoho />} />
      </Routes>
    </div>
  );
}

export default App;
