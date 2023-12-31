import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: ({ page, pageSize }) => ({
                url: '/products',
                method: 'GET',
                params: { limit: pageSize, skip: (page - 1) * pageSize },
            }),
        }),
        onSuccess: (data, variables, api, result) => {
            const mergedData = {
                ...result,
                data: {
                    ...result.data,
                    results: [...result.data.results, ...data.results],
                },
            };
            api.updateQueryResult('getProducts', variables, mergedData);
        },
    }),
});

export const { useGetProductsQuery } = productsApi