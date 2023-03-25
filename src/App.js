import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter } from 'react-router-dom';
import Pages from './Routes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Pages/>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
