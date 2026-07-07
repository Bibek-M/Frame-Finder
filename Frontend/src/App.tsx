import { Route, Routes } from "react-router-dom";
import Singup from "./pages/Singup";
import Singin from "./pages/Singin";
import Landing from "./pages/Landing"
import PageNotFound from "./pages/PageNotFound";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Singup/>}/>
        <Route path="/signin" element={<Singin/>}/>
        <Route path="/" element={<Landing/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </div>

  )
}

export default App