import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const ExpenseTable = ({ expenses }) => {
    return (
        <div className="expenseTable">
            <DataTable value={expenses} responsiveLayout="scroll" stripedRows>
                <Column field="date" header="Fecha" body={(rowData) => new Date(rowData.date).toLocaleDateString()} />
                <Column field="category" header="Categoría" />
                <Column field="description" header="Descripción" />
                <Column field="amount" header="Monto" body={(rowData) => `$${rowData.amount}`} />
            </DataTable>
        </div>
    );
};

export default ExpenseTable;
