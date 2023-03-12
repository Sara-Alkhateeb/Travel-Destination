// import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'; 
import Alldestination from './components/Alldestination/Alldestination';
import Home from '../src/components/home/Home';
import TourDetails from './components/TourDetails/TourDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
   
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/city/:id" element={<TourDetails/>}></Route>
        <Route path="/alldestination" element={<Alldestination/>}></Route>
      </Routes>
    </>
  );
}

export default App;
