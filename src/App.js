import './App.css';
import { useState } from "react"
import Countries from "./pages/Countries";
import CountryDetail from './pages/CountryDetail';
import ErrorPage from './pages/ErrorPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { NewCountryName } from "./store/context"

function App() {

  const [newCountryName, setNewCountryName] = useState("ethiopia");


  return (
    <Router>
      <NewCountryName.Provider value={{ newCountryName, setNewCountryName }}>
        <Routes>
          <Route path='/' element={<Countries />} />
          <Route path='/index' element={<Countries />} />
          <Route path='/CountryDetail/:crs' element={<CountryDetail />} />
          <Route path='/*' element={<ErrorPage />} />
        </Routes>
      </NewCountryName.Provider>
    </Router>
  );
}

export default App;