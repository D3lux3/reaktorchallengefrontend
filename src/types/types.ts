export interface ProductType {
    id: string,
    type: string,
    name: string,
    color: string[],
    price: number,
    manufacturer: string,
    stock: string
}

export interface ProductsPropsType {
    products: ProductType[],
    pageNum: number,
    setPageNum: React.Dispatch<number>,
    loading: boolean,
    hasMore: boolean
}

