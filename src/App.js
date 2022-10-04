import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Quotes } from './components/Quotes';
import { Slider } from './components/Slider';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Slider/>
      <Quotes/>
      <Footer/>
    </div>
  );
}

export default App;
