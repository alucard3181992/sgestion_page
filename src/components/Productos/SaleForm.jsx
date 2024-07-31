import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import SaleDetails2 from './SaleDetails';
import RegistroProducto from './Registro';
import { RadioButton } from 'primereact/radiobutton';

const SaleForm2 = ({ initialProducts, estados }) => {
    const [products] = useState(initialProducts)
    const [saleDetails, setSaleDetails] = useState([]);
    const [tipo, setTipo] = useState(false);
    const [maxVentas, setMaxVentas] = useState()

    const addProductToSale = (product) => {
        const existingProduct = saleDetails.find((p) => p.id === product.id);
        if (existingProduct) {
            setSaleDetails(saleDetails.map((p) => (p.id === product.id ? { ...p, cantidad: p.cantidad + 1 } : p)));
        } else {
            setSaleDetails([...saleDetails, { ...product, cantidad: 1 }]);
        }
    };
    useEffect(() => {
        setMaxVentas(Math.max(...products.map((producto) => producto.ranking)))
        console.log("SI ME LLAMAN");
    }, [products]);

    const updateSaleDetail = (updatedProduct) => {
        setSaleDetails(saleDetails.map((p) => (p.id === updatedProduct.id ? updatedProduct : p)));
    };

    return (
        <div className="p-grid">
            <div className="p-col-12 p-md-6 mb-5">
                {/* <ProductList products={products} onAddToCart={addProductToSale} /> */}
                <ProductList onAddToCart={addProductToSale} products={products} icon={"pi pi-check"}
                    titulo={"Producto"} estados={estados} maxVentas={maxVentas} />
            </div>
            <div className="p-col-12 mb-5">
                <div className="flex flex-wrap gap-3 justify-content-center">
                    <div className="flex align-items-center">
                        <RadioButton inputId="ingredient1" name="pizza" value={true} onChange={(e) => setTipo(e.value)} checked={tipo} />
                        <label htmlFor="ingredient1" className="ml-2">Salida</label>
                    </div>
                    <div className="flex align-items-center">
                        <RadioButton inputId="ingredient2" name="pizza" value={false} onChange={(e) => setTipo(e.value)} checked={!tipo} />
                        <label htmlFor="ingredient2" className="ml-2">Entrada</label>
                    </div>
                </div>
                <SaleDetails2 details={saleDetails} onUpdateDetail={updateSaleDetail} />
            </div>
            <div className="p-col-12 mb-5">
                <RegistroProducto
                    details={saleDetails}
                    onUpdateDetail={updateSaleDetail}
                ></RegistroProducto>
            </div>
        </div>
    );
};

export default SaleForm2;
