import MainSection from './components/MainSection'
import Header from './components/Header'
import Footer from './components/Footer'
import {BrowserRouter} from "react-router-dom"
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Header/>
     <MainSection/>
     <Footer/>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
