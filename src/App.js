import './App.css';
import Footer from './components/footer/index';
import Header from './components/header/index';
import Main from './components/main/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Main />
        <Footer />
        
      </header>
    </div>
  );
}

export default App;
