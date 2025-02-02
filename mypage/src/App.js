import MyProfile from "./containers/MyProfile";
import UpdayReport from "./containers/UpdayReport";
import ChallengeList from "./containers/ChallengeList";
import "./styles/_common.scss";

function App() {
  return (
    <div className="page-setting">
      <div className="part1">
        <MyProfile />
        <UpdayReport />
      </div>
      <dic>
        <ChallengeList></ChallengeList>
      </dic>
    </div>
  );
}

export default App;
