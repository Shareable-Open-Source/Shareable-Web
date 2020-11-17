import './App.scss';

import 'rsuite/dist/styles/rsuite-default.css'; 
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes/Routes';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
    </div>
  );
}

export default App;
