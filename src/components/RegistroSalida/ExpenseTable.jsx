import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Validacion } from "@/recursos/js/Validacion";

import { format } from 'date-fns';

const ExpenseTable = ({ expenses }) => {
  const formatDate = (rowData) => {
    return format(new Date(rowData.date), "dd/MM/yyyy");
  };

  return (
    <div className="expenseTable">
      <DataTable value={expenses} responsiveLayout="scroll" stripedRows>
        <Column field="date" header="Fecha" body={formatDate} />
        <Column field="category" header="Categoría" />
        <Column field="description" header="Descripción" />
        <Column
          field="amount"
          header="Monto"
          body={(rowData) => `$${rowData.amount}`}
        />
      </DataTable>
    </div>
  );
};

export default ExpenseTable;
