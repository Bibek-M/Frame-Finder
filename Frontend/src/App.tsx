import { Route, Routes } from "react-router-dom";
import Singup from "./pages/Singup";
import Singin from "./pages/Singin";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Singup/>}/>
        <Route path="/signin" element={<Singin/>}/>
      </Routes>
    </div>

  )
}

export default App