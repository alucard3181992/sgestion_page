import React, { useState } from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { FilterMatchMode } from 'primereact/api';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';

const getAllKeys = (products) => {
    const keys = new Set();
    products.forEach(product => {
        Object.keys(product).forEach(key => keys.add(key));
    });
    return Array.from(keys);
};

const ProductList = ({ products, onAddToCart, p }) => {

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

    const startContent = (
        <React.Fragment>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText
                    type="search"
                    value={globalFilterValue}
                    onChange={onGlobalFilterChange}
                    placeholder="Buscar Producto"
                    className='w-full' />
            </span>
        </React.Fragment>
    )

    const header = () => {
        return (
            <Toolbar start={startContent} end={p()} />
        );
    };

    const imageBodyTemplate = (product) => {
        return <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.image} className="w-6rem shadow-2 border-round" />;
    };
    const statusBodyTemplate = (product) => {
        return <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
    }

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    }

    return (
        <div>
            <DataTable
                /* showGridlines */
                value={products}
                paginator rows={10}
                header={header()}
                stripedRows
                removableSort
                filters={filters}
                globalFilterFields={keys}>
                {Object.keys(products[0]).map((key) => (
                    key === "image" ? <Column key={key} header="Image" body={imageBodyTemplate} />
                        : (key !== "inventoryStatus" ? < Column
                            key={key}
                            field={key}
                            header={key.charAt(0).toUpperCase() + key.slice(1)}
                            sortable />
                            :
                            <Column key={key}
                                header={key.charAt(0).toUpperCase() + key.slice(1)}
                                body={statusBodyTemplate}
                                sortable />)

                ))}
                <Column
                    header="Añadir"
                    body={(rowData) => (
                        <Button
                            icon="pi pi-shopping-cart"
                            className="p-button-rounded"
                            onClick={(e) => {
                                e.preventDefault()
                                onAddToCart(rowData)
                            }}></Button>
                    )}
                />
            </DataTable>
        </div>
    );
};

export default ProductList;
