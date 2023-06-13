import './App.css';
import data from './data/data.js'
import Nav from './components/Nav';
import Footer from './components/Footer';
import LargeImage from './components/LargeImage';
import FlowerCard from './components/FlowerCard';

function App() {

  //---------------------JAVASCRIPT LOGIC---------------------

  const flowers = data.map((element, index) => {
    return (
      <FlowerCard 
      {...element} 
      key={index} 
      />
    )
  });

    //---------------------JSX LOGIC---------------------
  return (
    <div className="App">
        <Nav />
        <LargeImage />
        <div>
          {flowers}
        </div>
        <Footer />

    </div>
  );
}

export default App;
