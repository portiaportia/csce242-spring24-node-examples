import './App.css';
import Header from './Header';
import Animal from './Animal';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Header />

      <Animal name="Panda" className="panda" image="images/panda.webp" />

      <Animal name="Tiger" className="tiger" image="images/tiger.jpg" />

      <Footer />
    </div>
  )
}

export default App;
