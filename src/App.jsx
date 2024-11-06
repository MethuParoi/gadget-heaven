
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import AppLayout from './ui/AppLayout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Statistics from "./pages/Statistics";
import ProductDetails from "./pages/ProductDetails";
import { PidProvider } from "./context-api/Context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";

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
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/details" element={<ProductDetails />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </PidProvider>
  );
}

export default App
