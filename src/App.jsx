import "./App.css";
import BackgroundMusic from './features/backgroundMusic/BackgroundMusic';
import DashboardView from './features/dashBoard/DashboardView';
import LoginView from "./features/login/LoginView";
import SignUpView from "./features/signUp/SignUpView";
import ModalView from "./features/modal/ModalView";



function App() {



  return (
    <div className="App-layout">
      {/* <BackgroundMusic /> */ }
      <ModalView />
      <DashboardView />
      {/* <LoginView /> */ }
      {/* <SignUpView /> */ }
    </div>
  );
}

export default App;
