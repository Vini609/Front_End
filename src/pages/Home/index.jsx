import { Link } from 'react-router-dom';
import Categories from '../../components/Categories';
import './Home.css';
import Card from '../../components/Card/';
import { useEffect, useState } from 'react';

export default function Page() {
    const [selectedBtn, setSelectedBtn] = useState('');
    const [products, setProducts] = useState([]);



    useEffect(() => {
        async funcion loadProducts() {
            const data = await getProducts();

            setProducts(data.slice(o, 8));
        }

        loadProducts();
    }. []);

    return (
        <div>
            <Categories selectedBtn={selectedBtn} onSelect={setSelectedBtn} />
            <div className="cards-container">
                {products.map((item) => (
                    <Cardname 
                        name={item.title}
                        image={item.image}
                        category={item.category}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    )
    