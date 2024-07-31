import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputNumber } from 'primereact/inputnumber';

const SaleDetails2 = ({ details, onUpdateDetail, field = "cantidad" }) => {
    const updateQuantity = (product, quantity) => {
        onUpdateDetail({ ...product, [field]: quantity });
    };

    return (
        <div>
            <h2>Detalles</h2>
            <DataTable value={details} paginator rows={10}>
                <Column field="nombre" header="Producto" />
                <Column
                    header="Cantidad"
                    body={(rowData) => (
                        <InputNumber
                            value={rowData[field]}
                            onValueChange={(e) => updateQuantity(rowData, e.value)}
                            min={0}
                            showButtons
                            pt={{
                                decrementButton: { className: "p-0", style: { borderRadius: 0, borderBottomRightRadius: 4 } },
                                incrementButton: { className: "p-0", style: { borderRadius: 0, borderTopRightRadius: 4 } }
                            }}
                        />
                    )}
                />
            </DataTable>
        </div>
    );
};

export default SaleDetails2;
