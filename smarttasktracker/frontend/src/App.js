import { BrowserRouter,Routes,Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Home />}></Route>
      </Routes>
      </BrowserRouter>
  )
}

export default App;
