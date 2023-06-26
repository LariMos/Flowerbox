import logo from './logo.svg';
import './App.css';
import './index.css';
import Nav from './components/Nav.js';
import LargeImage from './components/LargeImage';
import Footer from './components/Footer';
import FlowerCard from './components/FlowerCard';
import data from './data/data.js';

function App() {
  const products = data.map((product, index) => {
    return (
      <FlowerCard key={index} {...product} />
    )
  });

  return (
    <div className="App">
      <div className="nav-bar">
        <Nav />
      </div>
      <div className="left"></div>
      <div className="right"></div>
        <Footer />
        <LargeImage />
      <div className="content">
      <div className="product-row">
          {products}
        </div>
      </div>
    </div>
  );
}

export default App;