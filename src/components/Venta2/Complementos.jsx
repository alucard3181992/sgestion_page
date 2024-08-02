import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';

const complementos = [
    { nombre: "Ceramica", medida: "10x43x25", precio: 2.6 },
    { nombre: "Plastoformo", medida: "10x43x100", precio: 15 },
    { nombre: "Plastoformo", medida: "12x43x100", precio: 18.87 },
    { nombre: "Plastoformo", medida: "15x43x100", precio: 25 },
    { nombre: "Caseton", medida: "10x43x25", precio: 11 },
    { nombre: "Caseton", medida: "10x43x26", precio: 12 },
    // ... agrega el resto de las opciones aquí
];

const groupByComplemento = () => {
    return complementos.reduce((acc, curr) => {
        acc[curr.nombre] = acc[curr.nombre] || [];
        acc[curr.nombre].push(curr);
        return acc;
    }, {});
};

const groupedComplementos = groupByComplemento();

const ComplementosAdicionales = ({ rows, setRows }) => {
    /* const initialRows = [
        { complemento: '', medida: '', precio: 0, cantidad: 0, precioTotal: 0 },
    ];
    const [rows, setRows] = useState(initialRows); */

    const handleComplementoChange = (e, index) => {
        const newRows = [...rows];
        newRows[index].complemento = e.value;
        newRows[index].medida = '';
        newRows[index].precio = 0;
        newRows[index].cantidad = 0;
        newRows[index].precioTotal = 0;
        setRows(newRows);
    };

    const handleDropdownChange = (e, index) => {
        const newRows = [...rows];
        const selectedComplemento = complementos.find(c => c.medida === e.value);
        newRows[index].medida = e.value;
        newRows[index].precio = selectedComplemento.precio;
        newRows[index].precioTotal = (newRows[index].cantidad * selectedComplemento.precio).toFixed(2);
        setRows(newRows);
    };

    const handleCantidadChange = (e, index) => {
        const newRows = [...rows];
        newRows[index].cantidad = e.value;
        newRows[index].precioTotal = (e.value * newRows[index].precio).toFixed(2);
        setRows(newRows);
    };

    const addRow = () => {
        setRows([...rows, { complemento: '', medida: '', precio: 0, cantidad: 0, precioTotal: 0 }]);
    };

    const calculateTotals = () => {
        const totals = rows.reduce((acc, row) => {
            acc.cantidad += parseInt(row.cantidad) || 0;
            acc.precioTotal += parseFloat(row.precioTotal) || 0;
            return acc;
        }, { cantidad: 0, precioTotal: 0 });

        return totals;
    };

    const totals = calculateTotals();

    return (
        <div className="datatable p-4 border-round shadow-2 surface-card">
            <DataTable value={rows} stripedRows>
                <Column field="complemento" header="Complemento" body={(rowData, options) => (
                    <Dropdown value={rowData.complemento}
                        options={Object.keys(groupedComplementos)}
                        onChange={(e) => handleComplementoChange(e, options.rowIndex)}
                        placeholder="Complemento" />
                )} footer="TOTAL: " />
                <Column field="medida" header="Medida" body={(rowData, options) => (
                    <Dropdown value={rowData.medida}
                        options={groupedComplementos[rowData.complemento]}
                        optionLabel="medida"
                        optionValue="medida"
                        onChange={(e) => handleDropdownChange(e, options.rowIndex)}
                        placeholder="Medida" />
                )} />
                <Column field="precio" header="Precio" />
                <Column field="cantidad" header="Cantidad" body={(rowData, options) => (
                    <InputNumber
                        value={rowData.cantidad}
                        onValueChange={(e) => handleCantidadChange(e, options.rowIndex)}
                        min={0}
                        showButtons
                        pt={{
                            decrementButton: { className: "p-0", style: { borderRadius: 0, borderBottomRightRadius: 4 } },
                            incrementButton: { className: "p-0", style: { borderRadius: 0, borderTopRightRadius: 4 } },
                            input:{ root:{ 
                                className:"w-4"
                            }}
                        }} />
                )} footer={totals.cantidad} />
                <Column field="precioTotal" header="Precio Total" footer={totals.precioTotal.toFixed(2)} />
            </DataTable>
            <Button label="Agregar Fila" icon="pi pi-plus" className="p-mt-2" onClick={addRow} />
        </div>
    );
};

export default ComplementosAdicionales;
