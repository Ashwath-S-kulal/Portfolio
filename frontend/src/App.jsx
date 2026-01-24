import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';


function App() {

  return (
<div className='bg-gray-900 min-h-screen min-w-fit'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
