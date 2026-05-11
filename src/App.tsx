import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ConditionDetail } from './pages/ConditionDetail';
import { About } from './pages/About';
import { Sources } from './pages/Sources';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/conditions/:slug" element={<ConditionDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/sources" element={<Sources />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
