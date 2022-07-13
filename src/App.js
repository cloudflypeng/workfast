

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './pages/main'
import Snip from './pages/snip'
import Picget from './pages/pic-get'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/snip" element={<Snip />} />
          <Route path="/picget" element={<Picget />} />
          <Route path="/" element={<Main />}>
            <Route exact index element={<Main />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

