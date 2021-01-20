import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ProductType } from '../types/types';
import Products from './Products'

const ProductContainer: React.FC<{ productName: string }> = ({ productName }) => {
    const [pageNum, setPageNum] = useState<number>(1);
    const [products, setProducts] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [hasMore, setHasMore] = useState<boolean>(false);

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                setLoading(true);
                const { data: productData } = await axios.get<ProductType[]>(`http://localhost:3002/products/${productName}?page=${pageNum}`);
                setProducts(products.concat(productData));
                productData.length > 0 ? setHasMore(true) : setHasMore(false);
            } catch (e) {
                console.error(e);
            }
            setLoading(false);
        };
        fetchProductData();
    }, [productName, pageNum])


    return (
        <Products products={products} pageNum={pageNum} setPageNum={setPageNum} loading={loading} hasMore={hasMore} />
    );
}

export default ProductContainer;