import "./App.css";
import SignInForm from "./Forms/SignInForm"
import Landing from "./components/Landing"
import SignUpForm from "./Forms/SignUpForm"
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
      <Route exact path="/signin" component={SignInForm} />
      <Route exact path="/signup" component={SignUpForm} />
      <Route exact path="/" component={Landing} />
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
