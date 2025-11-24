import { Link } from 'react-router-dom';
import Categories from '../../components/Categories';
import './Home.css';
import Card from '../../components/Card/';
import { useEffect, useState } from 'react';
import { getProducts } from '../../services/productService';

export default function Page() {
    const [selectedBtn, setSelectedBtn] = useState('');
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadProducts() {   // corrigido: function
            const data = await getProducts(); // deixei como estava no seu código original

            setProducts(data.slice(0, 8));   // corrigido: número 0
        }

        loadProducts();
    }, []);  // corrigido: sintaxe do useEffect
          
    return (
        <div>
            <Categories selectedBtn={selectedBtn} onSelect={setSelectedBtn} />
            <div className="cards-container">
                {products.map((item) => (
                    <Card               // corrigido: Cardname → Card para bater com seu import
                        name={item.title}
                        image={item.image}
                        description={item.description}
                        category={item.category}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
}
