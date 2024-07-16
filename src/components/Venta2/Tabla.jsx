import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const DataTableExcel = ({ rows, setRows }) => {
    const productos = [
        { serie: 100, medida: 3.7, precio: 22.2 },
        { serie: 101, medida: 4.3, precio: 23.3 },
        { serie: 102, medida: 4.8, precio: 25.9 },
        { serie: 103, medida: 5.1, precio: 27.0 },
        { serie: 104, medida: 5.7, precio: 27.14 },
        { serie: 105, medida: 7.2, precio: 31.1 }
    ];

    /* const initialRows = Array.from({ length: 10 }, () => ({ longitud: '', nroPzas: '', mlViguetas: '', serie: '', bs: '' }));
    const [rows, setRows] = useState(initialRows); */

    const handleInputChange = (e, index, field) => {
        const newRows = [...rows];
        newRows[index][field] = e.target.value;

        if (field === 'longitud' || field === 'nroPzas') {
            const longitud = parseFloat(newRows[index].longitud);
            const nroPzas = parseInt(newRows[index].nroPzas, 10);
            if (!isNaN(longitud) && !isNaN(nroPzas)) {
                const producto = productos.find(p => longitud <= p.medida);
                if (producto) {
                    const mlViguetas = (longitud * nroPzas).toFixed(2);
                    const bs = (mlViguetas * producto.precio).toFixed(2);
                    newRows[index].mlViguetas = mlViguetas;
                    newRows[index].serie = producto.serie;
                    newRows[index].bs = bs;
                }
            }
        }

        setRows(newRows);
    };

    const addRow = () => {
        setRows([...rows, { longitud: '', nroPzas: '', mlViguetas: '', serie: '', bs: '' }]);
    };

    const calculateTotals = () => {
        const totals = rows.reduce((acc, row) => {
            acc.nroPzas += parseInt(row.nroPzas) || 0;
            acc.mlViguetas += parseFloat(row.mlViguetas) || 0;
            acc.bs += parseFloat(row.bs) || 0;
            return acc;
        }, { nroPzas: 0, mlViguetas: 0, bs: 0 });

        return totals;
    };

    const totals = calculateTotals();

    const inputTextEditor = (options) => {
        return (
            <InputText
                type="text"
                value={options.value}
                onChange={(e) => handleInputChange(e, options.rowIndex, options.field)}
            />
        );
    };
    return (
        <div className="datatable p-4 border-round shadow-2 surface-card w-full">
            <DataTable
                value={rows}
                stripedRows
                className='w-full'
            >
                <Column header="Nº" body={(data, options) => options.rowIndex + 1} frozen />
                <Column field="longitud" header="Longitud" editor={inputTextEditor} footer={"TOTALES: "} />
                <Column field="nroPzas" header="Nro. Pzas" editor={inputTextEditor} footer={totals.nroPzas} />
                <Column field="mlViguetas" header="Ml. Viguetas" footer={totals.mlViguetas.toFixed(2)} />
                <Column field="serie" header="Serie" />
                <Column field="bs" header="Bs." footer={totals.bs.toFixed(2)} />
            </DataTable>
            <Button label="Agregar Fila" icon="pi pi-plus" className="p-mt-2" onClick={addRow} />
        </div>
    );
};

export default DataTableExcel;
