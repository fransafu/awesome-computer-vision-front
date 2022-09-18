import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PageLayout from './layouts/PageLayout';
import Home from './pages/Home';
import Dataset from './pages/Dataset';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="/dataset" element={<Dataset />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
