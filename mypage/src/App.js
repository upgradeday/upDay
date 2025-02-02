import "./styles/_common.scss";
import MyProfile from "./containers/MyProfile";
import MyReport from "./containers/MyReport";
import Manegement from "./containers/Manegement";

function App() {
  return (
    <div className="page-setting">
      <div className="part1">
        <MyProfile />
        <MyReport />
      </div>
      <dic>
        <Manegement />
      </dic>
    </div>
  );
}

export default App;
