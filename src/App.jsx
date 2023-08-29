import "./App.css";
import BackgroundMusic from './features/backgroundMusic/BackgroundMusic';
import DashboardView from './features/dashBoard/DashboardView';
import LoginView from "./features/login/LoginView";
import SignUpView from "./features/signUp/SignUpView";
import ModalView from "./features/modal/ModalView";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";




function App() {



  return (
    <div className="App-layout">
      <BackgroundMusic />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardView />} />   
          <Route path="/LoginView" element={<LoginView />} />
          <Route path="/SignUpView" element={<SignUpView />} />   
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
