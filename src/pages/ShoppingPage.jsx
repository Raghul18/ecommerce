import React, { useState, useCallback } from 'react'
import Dropdown from '../components/Dropdown';
import { useGetProductsQuery } from '../redux/api/producApi';
import ShoppingPageHero from '../components/GenericHero';
import Card from '../components/Card';
import Pagination from '../components/Pagination';
import ErrorPage from './ErrorPage';

function ShoppingPage() {
    const [page, setPage] = useState(1);
    const { data, error, isLoading } = useGetProductsQuery({ page, pageSize: 20 });
    const [filteredProducts, setFilteredProducts] = useState([]);

    const handleCategoryChange = useCallback((e) => {
        const category = e.target.textContent;
        const filteredVal = data?.products?.filter(product => product.category === category);
        setFilteredProducts(filteredVal.length ? filteredVal : data.products);
    }, [data?.products]);

    const handleNextPage = useCallback(() => {
        setPage(page => page + 1);
    }, []);

    const handlePrevPage = useCallback(() => {
        setPage(page => page - 1);
    }, []);


    if (error) return <ErrorPage />

    if (isLoading) return <h1>Loading</h1>
    const allProducts = data.products;
    const categories = ['All Products', ...new Set(allProducts.map(products => products.category))].slice(0, 5);
    const totalPages = data?.total ? Math.round(data.total / 20) : 1;
    return (
        <>
            <ShoppingPageHero heading={"ShoppingPage"} />
            <Dropdown categories={categories} handleCategoryChange={handleCategoryChange} />
            <Card cardData={!filteredProducts.length ? allProducts : filteredProducts} />
            <Pagination page={page} handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} totalPages={totalPages} />
        </>
    )
}

export default ShoppingPage;
