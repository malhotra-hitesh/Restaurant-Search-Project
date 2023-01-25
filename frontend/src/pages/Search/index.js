import {useEffect, useState} from "react";
import product from "../../components/Product"
const Search = () => {

    const [search, setSearch] = useState([])
    const fetchSearch = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products/1');
            const data = await response.json()
            console.log(data.images)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchSearch()
    }, []);

    return (
        <div>
            {search.map(search => (
                <product
                    key = {product.id}
                    image = {product.image}

               />
            ))}
        </div>
    );

};
export default Search;