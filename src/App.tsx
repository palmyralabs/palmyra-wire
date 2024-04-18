
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} >
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
