import { Link } from 'wouter';
import { useProducts } from '../../hooks/use-products-hook';
import './products.css'

export const Products = () => {

    const {data, isLoading} = useProducts();

  if (isLoading) {
    return (
      <div class="loading-screen">
      <div class="spinner"></div>
    </div>
    );
  }

  return (
        <section className="container">
        {data.map((product) => (
            <article key={product.id} className="card" style={{width: "18rem"}}>
                <img src={product.image} className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price} USD</p>
                <Link to={`/products/${product.id}`} className="btn btn-primary">View product</Link>
            </div>
          </article>
        ))}
    </section>
  )
}
