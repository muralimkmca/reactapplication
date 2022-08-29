import './App.css';
import { Addfood } from './components/Addfood';
import { Listfood } from './components/Listfood';
import { Home } from './components/Home';
import { Navigation } from './components/Navigation';
import {BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Learn ReactJS</h1>
      {/* <Addfood />
      <Listfood /> */}
      <Navigation />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/lfood" element={<Listfood />} />
        <Route path="/afood" element={<Addfood />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
