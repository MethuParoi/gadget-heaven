
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import AppLayout from './ui/AppLayout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Statistics from './pages/Statistics';
import Cart from './pages/Cart';
import ProductDetails from "./pages/ProductDetails";
import { PidProvider } from "./context-api/Context";

function App() {
  return (
    <PidProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/details" element={<ProductDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PidProvider>
  );
}

export default App
