import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';


function App() {
  return (
    <div className="App">
        <Header/>
       
        <h1>Olá</h1>
        <Banner/>
        <Footer/>
    </div>
  );
}

export default App;
