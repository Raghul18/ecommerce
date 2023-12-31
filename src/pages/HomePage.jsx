import React, {useMemo} from 'react'
import Hero from '../components/Hero'
import Card from '../components/Card'
import { useGetProductsQuery } from '../redux/api/producApi'
import ErrorPage from './ErrorPage';


const randomSort = () => Math.random() - 0.5;


function HomePage() {
    const { data: { products = [] } = {}, error, isLoading } = useGetProductsQuery({ page: 1, pageSize: 30 });

    if (error) return <ErrorPage />


    const newArrivals = useMemo(() => {
        return products.slice().sort(randomSort).slice(0, 4);
    }, [products]);

    const smartPhones = useMemo(() => {
        return products.filter(product => product.category === "smartphones");
    }, [products]);

    const groceries = useMemo(() => {
        return products.filter(product => product.category === "groceries");
    }, [products]);

    return (
        <>
            <Hero />
            {!isLoading &&
                (<><Card heading={"New Arrivals"} cardData={newArrivals} />
                    <Card heading={"SmartPhones"} cardData={smartPhones} />
                    <Card heading={"Groceries"} cardData={groceries} /></>)
            }
        </>
    )
}

export default HomePage
