import React from 'react';
import ReactDOM from 'react-dom';
import SaleForm from './SaleForm';

const products = [
    {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        inventoryStatus: 'INSTOCK',
        rating: 5
    },
    {
        id: '1001',
        code: 'nvklal433',
        name: 'Black Watch',
        description: 'Product Description',
        image: 'black-watch.jpg',
        price: 72,
        category: 'Accessories',
        inventoryStatus: 'INSTOCK',
        rating: 4
    },
];

const customers = [
    { id: 1, name: 'Juan Perez' },
    { id: 2, name: 'Maria Gomez' }
];

const VistaPrincipalVenta3 = () => {
    return (<SaleForm initialProducts={products} initialCustomers={customers} />
    )
}
export default VistaPrincipalVenta3