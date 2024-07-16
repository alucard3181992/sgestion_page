import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';

const ResumenCotizacion = ({ viguetas, complementos, setTotalesDes, descuento, setDescuento }) => {
    const [discounts, setDiscounts] = useState({
        viguetas: 20,
        complementos: {},
    });

    const [rows, setRows] = useState([]);
    

    const calcularTotalViguetas = () => {
        return viguetas
            .filter(item => item.bs && !isNaN(parseFloat(item.bs)))
            .reduce((total, item) => total + parseFloat(item.bs), 0);
    };

    useEffect(() => {
        const rowsData = [];

        const totalViguetas = calcularTotalViguetas();

        if (totalViguetas > 0) {
            rowsData.push({
                producto: 'Viguetas',
                precioTotal: totalViguetas,
                descuento: discounts.viguetas,
                precioFinal: calcularPrecioFinal(totalViguetas, discounts.viguetas),
            });
        }

        const complementoGroups = complementos.reduce((acc, item) => {
            if (item.precioTotal > 0) {
                if (!acc[item.complemento]) {
                    acc[item.complemento] = {
                        complemento: item.complemento,
                        precioTotal: 0,
                        cantidad: 0,
                    };
                }
                acc[item.complemento].precioTotal += parseFloat(item.precioTotal);
                acc[item.complemento].cantidad += item.cantidad;
            }
            return acc;
        }, {});

        Object.keys(complementoGroups).forEach((key) => {
            const item = complementoGroups[key];
            const descuento = discounts.complementos[key] || 0;
            rowsData.push({
                producto: key,
                precioTotal: parseFloat(item.precioTotal),
                descuento,
                precioFinal: calcularPrecioFinal(item.precioTotal, descuento),
            });
        });

        setRows(rowsData)
        setTotalesDes(rowsData)
    }, [viguetas, complementos, discounts]);

    const calcularPrecioFinal = (total, descuento) => {
        return total - (total * (descuento / 100));
    };

    const handleDiscountChange = (e, rowIndex) => {
        const newRows = [...rows];
        newRows[rowIndex].descuento = e.value;
        newRows[rowIndex].precioFinal = calcularPrecioFinal(newRows[rowIndex].precioTotal, e.value);

        if (newRows[rowIndex].producto === 'Viguetas') {
            setDiscounts((prev) => ({ ...prev, viguetas: e.value }));
        } else {
            setDiscounts((prev) => ({
                ...prev,
                complementos: {
                    ...prev.complementos,
                    [newRows[rowIndex].producto]: e.value,
                },
            }));
        }

        setRows(newRows);
    };

    const totalCotizacion = rows.reduce((acc, item) => acc + item.precioFinal, 0) + descuento; // Incluyendo comisión maestro

    const p = () => (<React.Fragment><InputNumber
        value={descuento}
        onValueChange={(e) => setDescuento(e.value)}
        min={0}
        suffix=' bs'
        pt={{
            input: {
                root: {
                    className: "text-center"
                }
            }
        }} />
    </React.Fragment>)
    return (
        <div className="p-4 border-round shadow-2 surface-card">
            <DataTable value={rows} emptyMessage={"S/D"}>
                <Column field="producto" header="Producto" />
                <Column field="precioTotal" header="Precio Total" body={(rowData) => `${rowData.precioTotal.toFixed(2)} Bs.`} />
                <Column field="descuento" header="% Descuento" body={(rowData, options) => (
                    <InputNumber
                        value={rowData.descuento}
                        onValueChange={(e) => handleDiscountChange(e, options.rowIndex)}
                        min={0}
                        max={100}
                        suffix="%"
                        minFractionDigits={2}
                        maxFractionDigits={2} />
                )} footer="Comisión Maestro:" />
                <Column field="precioFinal" footer={p()} header="Precio Final" body={(rowData) => `${rowData.precioFinal.toFixed(2)} Bs.`} />
            </DataTable>
        </div>
    );
};

export default ResumenCotizacion;
