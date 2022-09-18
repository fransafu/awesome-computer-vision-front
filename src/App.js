import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PageLayout from './layouts/PageLayout';
import Home from './pages/Home';
import Dataset from './pages/Dataset';
import Papers from './pages/Papers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="/dataset" element={<Dataset />} />
          <Route path="/papers" element={<Papers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
