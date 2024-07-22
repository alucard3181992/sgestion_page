import React, { useState } from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { FilterMatchMode } from 'primereact/api';

const getAllKeys = (products) => {
    const keys = new Set();
    products.forEach(product => {
        Object.keys(product).forEach(key => keys.add(key));
    });
    return Array.from(keys);
};

const ProductList = ({ products, onAddToCart }) => {

    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });
    const [globalFilterValue, setGlobalFilterValue] = useState('');

    const keys = getAllKeys(products)
    /* console.log("LAS KEYS SON ", keys); */

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    return (
        <div>
            <h2>Productos</h2>
            <InputText
                type="search"
                value={globalFilterValue}
                onChange={onGlobalFilterChange}
                placeholder="Buscar..." />
            <DataTable
                value={products}
                paginator rows={10}
                filters={filters}
                globalFilterFields={keys}>
                {Object.keys(products[0]).map((key) => (
                    <Column key={key} field={key} header={key.charAt(0).toUpperCase() + key.slice(1)} />
                ))}
                <Column
                    header="Añadir"
                    body={(rowData) => (
                        <button onClick={() => onAddToCart(rowData)}>Añadir</button>
                    )}
                />
            </DataTable>
        </div>
    );
};

export default ProductList;
