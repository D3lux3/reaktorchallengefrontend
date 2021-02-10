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
                setProducts(products.concat(productData));
                setHasMore(productData.length > 0);
                setBackEndReady(!(productData.length == 0));
            } catch (e) {
                setBackEndReady(e?.response?.status === 503);
            }
            setLoading(false);
        };
        fetchProductData();
    }, [productName, pageNum])


    if (!backEndReady) {
        return (
            <>
                <Typography align="center" variant="h6">Loading...💡</Typography>
            </>
        );
    }

    return (
        <Products products={products} pageNum={pageNum} setPageNum={setPageNum} loading={loading} hasMore={hasMore} />
    );
}

export default ProductContainer;