import { useState,useEffect } from 'react'
import "./products.css"
import { Link } from 'wouter';

export const Products = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading ] = useState(true)
    const apiUrl = "https://fakestoreapi.com/products";

    const getData = async () => {
       
        try{
            const response = await fetch(apiUrl)
            if(!response.ok){
                console.error("se encontro un error")
            }
            const dataApi = await response.json()
            setData(dataApi)
            setLoading(false)
            console.log(data)
        }catch(error){
            console.error("error al cargar la data")
        }
    }

    useEffect(()=>{
        getData()
    }, [])

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
