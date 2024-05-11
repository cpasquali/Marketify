import './App.css';
import { NavBar } from './components/nav-bar/nav-bar';
import { ProductDetails } from './components/products-details/product-details';
import { Products } from './components/products/products';
import { Switch, Route } from "wouter";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path='/' component={Products}/>
        <Route path="/products/:id" component={ProductDetails}/>
      </Switch>
    </>
  );
}

export default App;
