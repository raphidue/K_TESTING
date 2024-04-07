import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Homepage from './pages/Homepage'
import Category from './pages/Category'
import Product from './pages/Product'
import SiteHeader from './components/SiteHeader'
import Layout from './components/Layout'

function App() {
  return (
    <div className="App">
    {/*<SiteHeader />*/}
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;