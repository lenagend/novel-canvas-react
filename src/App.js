import {AuthProvider} from "./security/AuthContext";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./page/Home";
import Community from "./page/Community";

function App() {
  return (
    <AuthProvider>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/community/:category" element={<Community />}/>
          </Routes>
        </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
