import { useState } from "react";
import "./App.css";
import NavbarView from "./features/navbar/NavbarView";
import SidebarView from "./features/sidebar/SidebarView";
import FooterView from "./features/footer/FooterView";

function App() {
  return (
    <div className="App-layout">
      <NavbarView />
      <SidebarView />
      <FooterView />
    </div>
  );
}

export default App;
