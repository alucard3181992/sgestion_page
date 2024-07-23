import React from 'react';
import ReactDOM from 'react-dom';
import SaleForm from './SaleForm';
import Tabla2 from '../Tabla/Tabla2';

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

    {
        id: '1002',
        code: 'zz21cz3c1',
        name: 'Blue Band',
        description: 'Product Description',
        image: 'blue-band.jpg',
        price: 79,
        category: 'Fitness',
        quantity: 2,
        inventoryStatus: 'LOWSTOCK',
        rating: 3
    },
    {
        id: '1003',
        code: '244wgerg2',
        name: 'Blue T-Shirt',
        description: 'Product Description',
        image: 'blue-t-shirt.jpg',
        price: 29,
        category: 'Clothing',
        quantity: 25,
        inventoryStatus: 'INSTOCK',
        rating: 5
    },
];

const customers = [
    { id: 1, name: 'Juan Perez' },
    { id: 2, name: 'Maria Gomez' }
];

const VistaPrincipalVenta3 = () => {
    return (<React.Fragment>
        <SaleForm initialProducts={products} initialCustomers={customers} />
        {/* <Tabla2 lista={products}  /> */}
    </React.Fragment>
    )
}
export default VistaPrincipalVenta3