import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import Footer from "./components/Footer";
import "./styles/Footer.scss";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/"element={<Home/>}/>
     <Route/>
     </Routes>
     <Footer/>
    </Router>
  );
}

export default App;
