import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Styles from "../styles/Products.module.css";

const Products = () => {
    const [categoryList, setCategoryList] = useState([]);
    const [productStart, setProductStart] = useState([]);
    const [search, setSearch] = useState([]);
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
        const category = searchParams.get("category");

        const getProducts = async () => {
            try {
                const res = await fetch(
                    `https://dummyjson.com/products/category/${category}`
                );
                let data = await res.json();
                setProductStart(data.products);
            } catch (error) {
                console.log("Error");
            }
        };
        category && getProducts();
    }, [searchParams]);

    const handleSearch = (e) => {
        setSearch(e.target.value);
        setSearchParams((prevSearchParams) => {
            const newSearchParams = new URLSearchParams(prevSearchParams);
            newSearchParams.set("search", e.target.value);
            return newSearchParams;
        });
    };

    console.log(searchParams);

    return (
        <div>
            <div className={Styles.topControls}>
                <input
                    name="inputSearch"
                    placeholder="Поиск"
                    type="text"
                    onChange={handleSearch}
                />
                <button>Найти</button>
                <select
                    name="category"
                    value={searchParams.get("category" || "")}
                    onChange={(e) =>
                        setSearchParams({ category: e.target.value })
                    }
                >
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
