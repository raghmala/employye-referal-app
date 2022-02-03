import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import AppPage from "./Components/AppPage/AppPage";
import Home from "./Pages/Home/Home";
import Refer from "./Pages/Refer/Refer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={AppPage} />
        <Route path="/home" exact component={Home} />
        <Route path="/refer" exact component={Refer} />
      </BrowserRouter>
    </div>
  );
}

export default App;
