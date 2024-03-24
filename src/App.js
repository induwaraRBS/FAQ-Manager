import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signin from "./pages/Signin_Page/index";
import Home from "./pages/Home_Page/index";
import SignUp from "./pages/Signup_Page/index";
import NewQuestion from "./pages/NewQuestion_Page";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/Newquestion" element={<NewQuestion />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
