import {
  Routes,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';

export default function Router() {
  return (
    <Routes>
      <Route path="/" exact element={<NotFound />} />
      <Route path=":shippingMethod" element={<Home />} />
      <Route path=":shippingMethod" element={<Home />} />
    </Routes>
  );
}
