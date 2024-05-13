import { useEffect, useState } from "react";

const useProducts = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsloading] = useState(true)
    const apiUrl = "https://fakestoreapi.com/products";
    

        const getData = async () => {
            setIsloading(true)
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    console.log("error al traer dato")
                    return;
                }
                const dataApi = await response.json();
                setData(dataApi)
            } catch (error) {
                console.log("error al trael")
            }
            finally{
                setIsloading(false)
            }
        };

    useEffect(()=>{
        getData();
    }, [])

    return { data, getData, isLoading };
};

export { useProducts };
