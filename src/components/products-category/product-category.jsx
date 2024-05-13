import { useState, useEffect } from "react";
import { Link } from "wouter";
import './products-category.css'

export const ProductCategory = ({ params }) => {
    
    const { category } = params;
    
    const [dataId, setDataId] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const apiUrl = `https://fakestoreapi.com/products/category/${category}`;
    
    const getDataById = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error("Error al cargar los datos");
            }
            const dataApi = await response.json();
            setDataId(dataApi);
        } catch (error) {
            console.error("Error al cargar la data:", error);
        }
        finally{
            setIsLoading(false);
        }
    };
    
    useEffect(() => {
        getDataById();
    }, [category]);
    
    if (isLoading) {
        return (
            <h2 className="container loading">Loading...</h2>
        );
    }

    return (
        <section className="container">
            {dataId.map((product) => (
                <article key={product.id} className="card" style={{ width: "18rem" }}>
                    <img src={product.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">${product.price} USD</p>
                        <Link to={`/products/${product.id}`} className="btn btn-primary">Ver producto</Link>
                    </div>
                </article>
            ))}
        </section>
    );
};
