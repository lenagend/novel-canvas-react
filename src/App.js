import {AuthProvider} from "./security/AuthContext";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./page/Home";
import Community from "./page/Community";
import Read from "./page/Read";
import Login from "./page/Login";
import Canvas from "./page/Canvas";

function App() {
  return (
    <AuthProvider>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/canvas" element={<Canvas />}/>
              <Route path="/read/:postId" element={<Read />}/>
              <Route path="/community/:category" element={<Community />}/>
              <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
