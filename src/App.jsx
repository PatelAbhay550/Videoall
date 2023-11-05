import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import Trending from "./pages/Trending";
import Categories from "./pages/Categories";
import Subscription from "./pages/Subscription";
import Navbar from "./components/Navbar";
import Channel from "./pages/Channel";
import Settings from "./pages/Settings";
import Leftmenu from "./components/Leftmenu";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="overall">
          <div className="leftm">
            <Leftmenu />
          </div>
          <div className="cont">
            <Routes>
              <Route path="/" element={<Explore />}></Route>
              <Route path="/trending" element={<Trending />}></Route>
              <Route path="/categories" element={<Categories />}></Route>
              <Route path="/subscription" element={<Subscription />}></Route>
              <Route path="/channel" element={<Channel />}></Route>
              <Route path="/settings" element={<Settings />}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
