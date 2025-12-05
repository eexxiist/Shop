import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Styles from "../styles/Products.module.css";

const Products = () => {
    const [categoryList, setCategoryList] = useState([]);
    const [productStart, setProductStart] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const getCategoryList = async () => {
            try {
                const res = await fetch(
                    "https://dummyjson.com/products/categories"
                );
                let data = await res.json();
                setCategoryList(data);
            } catch (error) {
                console.log("Error");
            }
        };
        getCategoryList();
    }, []);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await fetch(
                    "https://dummyjson.com/products?limit=20"
                );
                let data = await res.json();
                setProductStart(data.products);
            } catch (error) {
                console.log("Error");
            }
        };
        getProducts();
    }, []);

    return (
        <div>
            <div className={Styles.topControls}>
                <input name="inputSearch" placeholder="Поиск" type="text" />
                <button>Найти</button>
                <select name="category" onChange={setSearchParams}>
                    {categoryList.map((category) => (
                        <option value={category.slug} key={category.slug}>
                            {category.name}
                        </option>
                    ))}
                </select>
                <button>Сбросить фильтр</button>
            </div>

            <div className={Styles.productsGrid}>
                {productStart.map((product) => (
                    <div className={Styles.productCard} key={product.id}>
                        <h3>{product.title}</h3>
                        <p>{product.price} $</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
