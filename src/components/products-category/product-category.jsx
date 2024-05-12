import { useState, useEffect } from "react";
import { Link } from "wouter";

export const ProductCategory = ({params}) => {
    
    const {category} = params;
    
      const [dataId, setDataId] = useState([]);
      const apiUrl = `https://fakestoreapi.com/products/category/${category}`;
    
      const getDataById = async () => {
        try {
          const response = await fetch(apiUrl);
          if (!response.ok) {
            console.error("Se encontró un error");
            return;
          }
          const dataApi = await response.json();
          setDataId(dataApi);
        } catch (error) {
          console.error("Error al cargar la data:", error);
        }
      }
    
      useEffect(()=>{
        getDataById()
      },[dataId])
      

      return(
        <section className="container">
        {dataId.map((product) => (
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
      );
}
