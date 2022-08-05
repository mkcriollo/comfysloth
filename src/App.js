import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  index,
  HomePage,
  ErrorPage,
  PrivateRoute,
  ProductsPage,
  SingleProductPage,
  AboutPage,
  AuthWrapper,
  CartPage,
  CheckoutPage,
} from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <Navbar />

        <Footer />
      </Switch>
    </Router>
  );
}

export default App;
