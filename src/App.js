// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  
  return (
    <div className="App">
      <p>Hello I am Anmol</p>
      <Router>
        <Routes>
          {/* <Header /> */}
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/header' element={<Header />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
    
  
  );
}

export default App;
