import "./App.css";
import Navbar from "./Components/Navbar";
import MainRoutes from "./Pages/MainRoutes";
import MyProfile from "./Pages/MyProfile";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <MainRoutes></MainRoutes>
      {/* <MyProfile></MyProfile> */}
    </div>
  );
}

export default App;
