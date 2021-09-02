// Components

import Header from "./Component/Header";
import "./App.css";
import Home from "./Component/Home";
import { Switch, Route } from "react-router-dom";
import Cart from "./Component/Cart";
import { TemplateProvider } from "./Component/templateProvider";
import ContextProvider from "./Component/ContextProvider";
import DetailView from "./Component/product/DetailView";

function App() {
  return (
    <div className="App">
      <TemplateProvider>
        <ContextProvider>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route exact path="/product/:id" component={DetailView} />
          </Switch>
        </ContextProvider>
      </TemplateProvider>
    </div>
  );
}

export default App;
