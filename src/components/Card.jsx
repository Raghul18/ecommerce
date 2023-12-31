import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';
import LazyLoad from 'react-lazyload';

function Card({ heading, cardData }) {
    const dispatch = useDispatch();
    return (
        <div>
            {heading && <p className="text-5xl font-bold my-6 text-center">{heading}</p>}
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
                {cardData.map(card => {
                    return (<div key={card.id} className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                        <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
                            <LazyLoad height={240}>
                            <img loading="lazy" className="object-cover w-full" src={card.thumbnail} alt="product image" />
                            </LazyLoad>
                            <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{card.discountPercentage}% OFF</span>
                        </div>
                        <div className="px-5 pb-5 mt-auto">
                            <div >
                                <h5 className="text-xl tracking-tight text-slate-900 line-clamp-2">{card.title}</h5>
                            </div>
                            <div className="mt-2 mb-5 flex items-center justify-between">
                                <p className="mx-auto">
                                    <span className="text-3xl font-bold text-slate-900">{"$" + card.price}</span>
                                    <span className="text-sm text-slate-900 line-through">{(card.price / (1 - (card.discountPercentage / 100))).toFixed(2)}</span>
                                </p>
                            </div>
                            <div onClick={() => { dispatch(addItem(card)); }} className="flex items-center justify-center rounded-md bg-slate-900 px-5 hover:cursor-pointer py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                Add to cart</div>
                        </div>
                    </div>);
                })}
            </div>
        </div>
    )
}

export default Card
