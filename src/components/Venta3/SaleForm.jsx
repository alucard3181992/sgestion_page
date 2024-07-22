import React, { useState } from 'react';
import ProductList from './ProductList';
import CustomerSelector from './CustomerSelector';
import SaleDetails from './SaleDetails';
import SaleTotals from './SaleTotals';

const SaleForm = ({ initialProducts, initialCustomers }) => {
    const [products] = useState(initialProducts);
    const [customers, setCustomers] = useState(initialCustomers);
    const [saleDetails, setSaleDetails] = useState([]);

    const addProductToSale = (product) => {
        const existingProduct = saleDetails.find((p) => p.id === product.id);
        if (existingProduct) {
            setSaleDetails(saleDetails.map((p) => (p.id === product.id ? { ...p, cantidad: p.cantidad + 1, stotal: (p.cantidad + 1) * p.price } : p)));
        } else {
            setSaleDetails([...saleDetails, { ...product, cantidad: 1, stotal: product.price }]);
        }
    };

    const updateSaleDetail = (updatedProduct) => {
        setSaleDetails(saleDetails.map((p) => (p.id === updatedProduct.id ? updatedProduct : p)));
    };

    const addNewCustomer = (newCustomer) => {
        setCustomers([...customers, newCustomer]);
    };

    return (
        <div className="p-grid">
            <div className="p-col-12 p-md-6">
                <CustomerSelector customers={customers} onAddCustomer={addNewCustomer} />
            </div>
            <div className="p-col-12 p-md-6">
                <ProductList products={products} onAddToCart={addProductToSale} />
            </div>
            <div className="p-col-12">
                <SaleDetails details={saleDetails} onUpdateDetail={updateSaleDetail} />
            </div>
            <div className="p-col-12">
                <SaleTotals details={saleDetails} />
            </div>
        </div>
    );
};

export default SaleForm;
