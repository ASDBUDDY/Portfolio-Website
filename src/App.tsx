import './App.css'
import About from './components/About';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';


function App() {
  

  return <>
  <div><Navbar/></div>
  <div><Carousel /></div>
  <div><Portfolio /></div>
  <div><About/></div>
  <div><Footer/></div>
  </>
}

export default App;
