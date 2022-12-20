import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import List from "./Screens/List";
import Login from "./Screens/Login";
import New from "./Screens/New";
import Single from "./Screens/Single";
import { productData, userData } from "./Data/newData";
import "./App.css";
const App = () => {
  const [mode, setMode] = useState(false);
  return (
    <Router>
      <div className={mode ? "app dark-theme" : ""}>
        <Routes>
          <Route path="/">
            <Route
              index
              element={<Home mode={mode} setMode={setMode} />}
            ></Route>
            {/* <Route path='signup' element={} ></Route> */}
            <Route path="login" element={<Login />}></Route>
            <Route path="users">
              <Route
                index
                element={<List mode={mode} setMode={setMode} />}
              ></Route>
              <Route
                path=":userId"
                element={<Single mode={mode} setMode={setMode} />}
              ></Route>
              <Route
                path="new"
                element={
                  <New
                    mode={mode}
                    setMode={setMode}
                    inputs={userData}
                    title="Add New Product"
                  />
                }
              ></Route>
            </Route>
            <Route path="products">
              <Route
                index
                element={<List mode={mode} setMode={setMode} />}
              ></Route>
              <Route
                path=":userId"
                element={<Single mode={mode} setMode={setMode} />}
              ></Route>
              <Route
                path="new"
                element={
                  <New
                    mode={mode}
                    setMode={setMode}
                    inputs={productData}
                    title="Add New Product"
                  />
                }
              ></Route>
            </Route>
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
