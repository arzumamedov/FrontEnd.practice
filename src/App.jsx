import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AddPage from './Pages/AddPage'
import BasketPage from './Pages/BasketPage'
import DetailPage from './Pages/DetailPage'
import HomePage from './Pages/HomePage'
import Mainlayout from './layouts/Mainlayout'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainlayout />}>
            <Route path="/home" element={<HomePage />} />
            <Route path='/add' element={<AddPage />} />
            <Route path='/detail' element={<DetailPage />} />
            <Route path='/basket' element={<BasketPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
