import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Container from './components/Container';


function App() {
  return (
    <div className="App">
        <Header/>
       
       
        <Banner/>
    {/* Dentro do container os PROPS children são os parametros */}
          <Container>
            <h1>Hello World</h1>
          </Container>
        <Footer/>
        
    </div>
  );
}

export default App;
