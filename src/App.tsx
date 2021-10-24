import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useAppDispatch } from "./store/hooks";
import HomePage from "./components/pages/homePage/HomePage";
import * as ProductsService from "./api/GenericService";
import { productsData } from "./data/products";
import "./App.css";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    ProductsService.create("products", productsData);
    return () => {
      ProductsService.deleteAll("products");
    };
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/products" />} />
        <Route exact path="/products">
          <HomePage />
        </Route>
        <Route exact path="/products/:id">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
