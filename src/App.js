import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Pages from './Routes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Pages/>
      </div>
    </BrowserRouter>
    
  )
}

export default App;
