import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Home } from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "./Pages/NotFound";


function App(){
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;