import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import "antd/dist/antd.min.css";
import "./App.css";

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
