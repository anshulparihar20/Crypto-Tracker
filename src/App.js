import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import CoinPage from "./pages/CoinPage";


function App() {

  return (
    <BrowserRouter>
      <div className='mui'>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route  path="/coins/:id" element={ <CoinPage/> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

{
  /* <Routes>
<Route path="/" element={<Home />} />
<Route path="about" element={<About />} />
</Routes> */
}
