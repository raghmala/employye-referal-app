import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import AppPage from "./Components/AppPage/AppPage";
import Home from "./Pages/Home/Home";
import MyReferrals from "./Pages/MyReferrals/MyReferrals";
import Refer from "./Pages/Refer/Refer";
import Admin from "./Pages/Admin/Admin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/refer/:vacancyId" component={Refer} />
        <Route path="/myReferrals" component={MyReferrals} />
        <Route path="/addNewOpening" component={Admin} />
      </BrowserRouter>
    </div>
  );
}

export default App;
