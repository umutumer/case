import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MyFlights from './pages/MyFlights';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/my-flights' element={<MyFlights />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
