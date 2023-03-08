import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllCountries from "./Components/Pages/AllCountries/AllCountries";
import Home from "./Components/Pages/Home/Home";
import Records from "./Components/Pages/Records/Records";
import NavBar from './Components/MainComponents/NavBar';
import Header from './Components/MainComponents/Header';
import Footer from './Components/MainComponents/Footer';

function App () {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/allCountries' element={<AllCountries />} />
        <Route path='/records' element={<Records />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
