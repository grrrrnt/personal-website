import logo from './logo.svg';
import './App.css';
import Intro from "./components/intro/Intro";
import Education from "./components/about/Education"; 
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Education />
    </div>
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
  );
}

export default App;
