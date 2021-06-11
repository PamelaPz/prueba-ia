import './assets/scss/App.scss';
import Banner from './components/Banner';
import Footer from './components/Footer';
import InfoNutritional from './components/InfoNutritional';
import NavBar from './components/NavBar';
import Products from './components/Products';

function App() {
  return (
    <div className="">
      <NavBar />
      <Banner />
      <InfoNutritional />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
