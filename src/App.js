import "./App.css";
import "antd/dist/antd.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="post/:id" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
