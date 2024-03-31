import './App.css';
import Create from "./Components/Create";
import { BrowserRouter, Routes, Route } from "react-router-dom"; //when click on submit button at that time goes to next page
import Read from "./Components/Read"
import Update from './Components/Update';

function App() {
  return (
  <div className="container">

<BrowserRouter >
    <Routes>
    <Route exact path="/" element={<Create/>}></Route>  // add "/" to url route to Create page
    <Route exact path="/read" element={<Read/>}></Route>  
    <Route exact path="/update" element={<Update/>}></Route>  
    </Routes>
    </BrowserRouter>
  </div>
   
  );
}

export default App;
