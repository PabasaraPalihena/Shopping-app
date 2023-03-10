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
import AddProduct from "./components/Admin/AddProduct";
import Products from "./components/Admin/Products";
import UpdateProduct from "./components/Admin/UpdateProduct";

function App() {
  return (
    <div>
      <Header title={"Shopping app"} />
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/addproduct">
            <AddProduct />
          </Route>
          <Route exact path="/allproducts">
            <Products />
          </Route>
          <Route exact path="/editproduct">
            <UpdateProduct />
          </Route>
          <Redirect to="/admin/404" />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
