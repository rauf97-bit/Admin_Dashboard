import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import List from "./Screens/List";
import Login from "./Screens/Login";
import New from "./Screens/New";
import Single from "./Screens/Single";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />}></Route>
          {/* <Route path='signup' element={} ></Route> */}
          <Route path="login" element={<Login />}></Route>
          <Route path="users">
            <Route index element={<List />}></Route>
            <Route path=":userId" element={<Single />}></Route>
            <Route path="new" element={<New />}></Route>
          </Route>
          <Route path="product">
            <Route index element={<List />}></Route>
            <Route path=":userId" element={<Single />}></Route>
            <Route path="new" element={<New />}></Route>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
