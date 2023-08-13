import { useState } from "react";
import "./App.css";
import BackgroundMusic from './features/backgroundMusic/BackgroundMusic';
import DashboardView from './features/dashBoard/DashboardView';
import LoginView from "./features/login/LoginView";
import SignUpView from "./features/signUp/SignUpView";



function App() {
  return (
    <div className="App-layout">
      {/* <BackgroundMusic /> */ }
      <DashboardView />
      {/* <LoginView /> */ }
      {/* <SignUpView /> */ }
    </div>
  );
}

export default App;
