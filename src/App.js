<<<<<<< HEAD
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
=======
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
>>>>>>> 61e04054809c0c801fe646b6773f838ead717a30
