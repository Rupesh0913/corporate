import './App.css';
import Navbar from "./components/Navbar"
import { BrowserRouter as Router , Switch , Link} from 'react-router-dom';

import Home from './components/pages/Home';
import Banner from './components/Banner';


function App() {
  return (
    <div className="App">

      <Router>
        <Navbar/>
        <Banner/>
      </Router>
    
    <Home/>

    </div>
  );
}

export default App;
