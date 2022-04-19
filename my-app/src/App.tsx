import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './component/pages/layout/Layout';
import Home from './component/pages/home/Home';
import About from './component/pages/about/About';

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
