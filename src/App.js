import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import AppPage from "./Components/AppPage/AppPage";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={AppPage} />
        <Route path="/home" exact component={Home} />
        {/* <Route path="/addEntry" component={AddEntry} />
      <Route path="/vehicleDetails" component={VehiclesDetails} />
      <Route path="/consolidatedReport" component={ConsolidatedReport} /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
