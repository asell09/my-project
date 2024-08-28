import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import MainContent from './components/main/MainContent'
import Promo from './components/main/promo/Promo';
import Footer from './components/main/promo/footer/Footer';


function App() {
  return (
    <div className="App">
        <Header />
        <MainContent />
        <Promo />
        <Footer />
        
    </div>
  );
}

export default App;
