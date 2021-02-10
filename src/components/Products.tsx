import React, { useRef, useCallback } from 'react';
import '../styles/Product.css';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Paper,
    Chip,
    TableHead,
    Typography
} from '@material-ui/core';
import { ProductsPropsType } from '../types/types';

const stockColor = (stock: string): string => {
    switch (stock) {
        case "INSTOCK":
            return "#05c46b"
        case "OUTOFSTOCK":
            return "#f53b57";
        case "LESSTHAN10":
            return "#ffa801";
        default:
            return "#d2dae2";
    }
}

const Products: React.FC<ProductsPropsType> = ({ products, pageNum, setPageNum, loading, hasMore }) => {
    const observer = useRef(null);
    const lastElement = useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPageNum(pageNum + 1)
            }
        })
        if (node) observer.current.observe(node)
    }, [loading, hasMore])

    return (
        <div>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Product name</TableCell>
                            <TableCell >Manufacturer</TableCell>
                            <TableCell >Type</TableCell>
                            <TableCell >ID</TableCell>
                            <TableCell >Price</TableCell>
                            <TableCell>Stock</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((o, i) => (
                            <TableRow ref={products.length === i + 1 ? lastElement : null} key={i}>
                                <TableCell>
                                    {o.name}
                                </TableCell>
                                <TableCell>
                                    {o.manufacturer}
                                </TableCell>
                                <TableCell>
                                    {o.type}
                                </TableCell>
                                <TableCell>
                                    {o.id}
                                </TableCell>
                                <TableCell>
                                    <div>{o.price} <span role="img" aria-label="money">💰</span></div>
                                </TableCell>
                                <TableCell>
                                    <Chip style={{ backgroundColor: stockColor(o.stock)}} label={o.stock === undefined ? "Loading..." : o.stock}/>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                {loading && <Typography variant="h6" align="center">Loading... 🚀</Typography>}
            </TableContainer>
        </div>
    );
}

export default Products;