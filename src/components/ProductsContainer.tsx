import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ProductType } from '../types/types';
import Products from './Products'
import { Typography } from '@material-ui/core';

const ProductContainer: React.FC<{ productName: string }> = ({ productName }) => {
    const [pageNum, setPageNum] = useState<number>(1);
    const [products, setProducts] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [hasMore, setHasMore] = useState<boolean>(false);
    const [backEndReady, setBackEndReady] = useState<boolean>(true);

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                setLoading(true);
                const { data: productData } = await axios.get<ProductType[] | undefined>(`${process.env.REACT_APP_API_URL}/products/${productName}?page=${pageNum}`);
                productData ? setBackEndReady(true) : setBackEndReady(false);
                setProducts(products.concat(productData));
                productData.length > 0 ? setHasMore(true) : setHasMore(false);
            } catch (e) {
                e?.response?.status === 503 ? setBackEndReady(false) : setBackEndReady(true);
            }
            setLoading(false);
        };
        fetchProductData();
    }, [productName, pageNum])


    if (!backEndReady) {
        return (
            <>
                <Typography align="center" variant="h6">Server is still loading 💤, please try again in a few seconds :-) 🧪</Typography>
            </>
        );
    }

    return (
        <Products products={products} pageNum={pageNum} setPageNum={setPageNum} loading={loading} hasMore={hasMore} />
    );
}

export default ProductContainer;