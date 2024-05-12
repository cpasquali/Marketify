import './App.css';
import { NavBar } from './components/nav-bar/nav-bar';
import { ProductDetails } from './components/products-details/product-details';
import { Products } from './components/products/products';
import { Switch, Route } from "wouter";
import { ProductCategory } from './components/products-category/product-category';

function App() {

  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" component={Products}/>
        <Route path="/products/:id" component={ProductDetails}/>
        <Route path="/products/category/:category" component={ProductCategory}/>
      </Switch>
    </>
  );
}

export default App;
