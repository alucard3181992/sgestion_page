import React, { useState } from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { FilterMatchMode } from 'primereact/api';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import { Funciones } from '../Tabla/Funciones';
import { FuncionesNuevas } from '../Func/FuncionesTabla';
import { Rating } from 'primereact/rating';


const ProductList = ({ products, onAddToCart, icon, estados = { v: 'Valido', f: 'No Valido' }, titulo = "...", maxVentas }) => {

    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });
    const [globalFilterValue, setGlobalFilterValue] = useState('');

    const keys = FuncionesNuevas.getAllKeys(products)
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
                    placeholder={"Buscar " + titulo}
                    className='w-full' />
            </span>
        </React.Fragment>
    )

    const header = () => {
        return (
            <Toolbar start={startContent} end={null} />
        );
    };

    const imageBodyTemplate = (product) => {
        // eslint-disable-next-line @next/next/no-img-element
        return <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.image} className="w-6rem shadow-2 border-round" />;
    };

    const statusBodyTemplate = (product) => {
        return <Tag value={FuncionesNuevas.formatEstado(product, estados)} severity={FuncionesNuevas.getSeverity(product)} />;
    }
    const ratingBodyTemplate = (product) => {
        return <Rating value={Math.round(product.ranking / maxVentas * 5)} readOnly cancel={false}></Rating>;
    }
    /**<Rating value={Math.round(product.ranking / maxVentas * 5)} readOnly cancel={false}></Rating> */
    return (
        <div>
            {/* {JSON.stringify(keys)} */}
            <DataTable
                /* showGridlines */
                value={products}
                paginator rows={10}
                header={header()}
                stripedRows
                removableSort
                filters={filters}
                sortField='id'
                sortOrder={1}
                globalFilterFields={keys}>
                {Object.keys(products[0]).map((key) => {
                    const standardKey = FuncionesNuevas.getStandardKey(key);

                    switch (standardKey) {
                        case 'image':
                            return <Column key={key} header={Funciones.formatearCadena(key)} body={imageBodyTemplate} />;
                        case 'status':
                            return <Column key={key} header={Funciones.formatearCadena(key)} body={(rowData) => statusBodyTemplate(rowData[key])} sortable />;
                        case 'rating':
                            return <Column key={key} header={Funciones.formatearCadena(key)} body={ratingBodyTemplate} sortable />;
                        case 'price':
                            return <Column key={key} header={Funciones.formatearCadena(key)} field={key} sortable />;
                        default:
                            return (
                                <Column
                                    key={key}
                                    field={key}
                                    header={key.charAt(0).toUpperCase() + key.slice(1)}
                                    sortable
                                />
                            );
                    }
                })}
                <Column
                    header="Añadir"
                    body={(rowData) => (
                        <Button
                            icon={icon}
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
