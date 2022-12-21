import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import List from "./Screens/List";
import Login from "./Screens/Login";
import New from "./Screens/New";
import Single from "./Screens/Single";
import { productData, userData } from "./Data/newData";
import "./App.css";
import { DarkModeContext } from "./context/darkModeContext";
const App = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <Router>
      <div className={darkMode ? "app dark-theme" : ""}>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}></Route>
            {/* <Route path='signup' element={} ></Route> */}
            <Route path="login" element={<Login />}></Route>
            <Route path="users">
              <Route index element={<List />}></Route>
              <Route path=":userId" element={<Single />}></Route>
              <Route
                path="new"
                element={<New inputs={userData} title="Add New Product" />}
              ></Route>
            </Route>
            <Route path="products">
              <Route index element={<List />}></Route>
              <Route path=":userId" element={<Single />}></Route>
              <Route
                path="new"
                element={<New inputs={productData} title="Add New Product" />}
              ></Route>
            </Route>
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
