import { useState, useEffect } from 'react';
import "./product-details.css";
import { Link } from 'wouter';

export const ProductDetails = ({params}) => {
  const {id} = params;
  const [isLoading, setIsLoading] = useState(true)
  const [dataId, setDataId] = useState({});
  const apiUrl = `https://fakestoreapi.com/products/${id}`;

  const getDataById = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        console.error("Se encontró un error");
        return;
      }
      const dataApi = await response.json();
      setDataId(dataApi);
      setIsLoading(false)
    } catch (error) {
      console.error("Error al cargar la data:", error);
    }
  }

  useEffect(() => {
    getDataById();
  }, []);

  if(isLoading){
    return(
      <h2 className="container loading">Loading...</h2>
    );
  }

  return (
    <section className="container">
      <article className="product">
        <img src={dataId.image} alt="imagen del producto" />
        <section>
          <h2>{dataId.title}</h2>
          <p className="description-product">{dataId.description}</p>
          <h3>${dataId.price} USD</h3>
          <div className="d-flex">
            <button className="btn mx-2">Buy</button>
            <Link to='/' className="btn mx-2">Go back</Link>
          </div>
        </section>
      </article>
    </section>
  );
}
