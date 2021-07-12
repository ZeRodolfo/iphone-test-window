import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./pages/home";
import Contact from "./pages/contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route path="/contact" render={() => <Contact />} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
