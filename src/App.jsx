import { useState } from "react";
import "./App.css";
import NavbarView from "./features/navbar/NavbarView";
import SidebarView from "./features/sidebar/SidebarView";

function App() {
  return (
    <div className="App-layout">
      <NavbarView />
      <SidebarView />
    </div>
  );
}

export default App;
