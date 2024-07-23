import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputNumber } from 'primereact/inputnumber';

const SaleDetails = ({ details, onUpdateDetail }) => {
    const updateQuantity = (product, quantity) => {
        onUpdateDetail({ ...product, cantidad: quantity, stotal: quantity * product.price });
    };

    const updateDiscount = (product, discount) => {
        const discountedPrice = product.price - (product.price * (discount / 100));
        onUpdateDetail({ ...product, discount, stotal: product.cantidad * discountedPrice });
    };

    return (
        <div>
            <h2>Detalles de Venta</h2>
            <DataTable value={details} paginator rows={10}>
                <Column field="name" header="Producto" />
                <Column field="price" header="Precio" />
                <Column
                    header="Cantidad"
                    body={(rowData) => (
                        <InputNumber
                            value={rowData.cantidad}
                            onValueChange={(e) => updateQuantity(rowData, e.value)}
                            min={0}
                            showButtons
                            /* buttonLayout="horizontal"
                            decrementButtonClassName="p-button-danger"
                            incrementButtonClassName="p-button-success"
                            incrementButtonIcon="pi pi-plus"
                            decrementButtonIcon="pi pi-minus" */
                            pt={{
                                decrementButton: { className: "p-0", style: { borderRadius: 0, borderBottomRightRadius: 4 } },
                                incrementButton: { className: "p-0", style: { borderRadius: 0, borderTopRightRadius: 4 } }
                            }}
                        />
                    )}
                />
                <Column
                    header="Descuento (%)"
                    body={(rowData) => (
                        <InputNumber
                            value={rowData.discount || 0}
                            onValueChange={(e) => updateDiscount(rowData, e.value)}
                            min={0}
                            max={100}
                            showButtons
                            pt={{
                                decrementButton: { className: "p-0 ", style: { borderRadius: 0, borderBottomRightRadius: 4 } },
                                incrementButton: { className: "p-0 ", style: { borderRadius: 0, borderTopRightRadius: 4 } }
                            }}
                        />
                    )}
                />
                <Column field="stotal" header="Subtotal" />
            </DataTable>
        </div>
    );
};

export default SaleDetails;
