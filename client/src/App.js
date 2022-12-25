import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from "./components/view/Header";
import Footer from "./components/view/Footer";
import Dashboard from "./components/Admin/Dashboard";

function App() {
  return (
    <div>
      <Header title={"Shopping app"} />
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Redirect to="/admin/404" />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
