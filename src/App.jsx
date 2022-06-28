import "./app.css"
import FinalData from "./pages/finalData/FinalData";
import Home from './pages/home/Home';
import {Routes, Route} from "react-router-dom";



const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/final-data" element={<FinalData/>}/>
      </Routes>

    </div>
  )
}

export default App;