
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='full-layout'>
      <div className='top-block'>
        <Header />
      </div>
    <div className="App center-block">
      <h2>Hello world !!!</h2>
    </div>
    <div className='bottom-block'>
      <Footer />
    </div>
    </div>
  );
}

export default App;
