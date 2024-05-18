import './App.css';
import { NavBar } from './components/nav-bar/nav-bar';
import { ProductDetails } from './components/products-details/product-details';
import { Products } from './components/products/products';
import { Switch, Route } from "wouter";
import { ProductCategory } from './components/products-category/product-category';
import { Footer } from './components/footer/footer.jsx';

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <main className="main-content">
        <Switch>
          <Route path="/" component={Products}/>
          <Route path="/products/:id" component={ProductDetails}/>
          <Route path="/products/category/:category" component={ProductCategory}/>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
