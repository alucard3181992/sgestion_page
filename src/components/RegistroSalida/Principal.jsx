import React, { useState, useRef } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseTable from "./ExpenseTable";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import ExpenseChart from "./ExpenseChart";
import ImportExcel from "./ImportExcel";

const PrincipalSalida = () => {
  const [expenses, setExpenses] = useState([]);
  const [categories] = useState([
    { label: "Material de Oficina", value: "office" },
    { label: "Material de Limpieza", value: "cleaning" },
    { label: "Insumos", value: "supplies" },
  ]);
  const toast = useRef(null);
  const [filters, setFilters] = useState({
    category: null,
    startDate: null,
    endDate: null,
  });

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }]);
    toast.current.show({
      severity: "success",
      summary: "Éxito",
      detail: "Gasto registrado correctamente",
      life: 3000,
    });
  };

  const handleFilterChange = (field, value) => {
    setFilters({ ...filters, [field]: value });
    toast.current.show({
      severity: "info",
      summary: "Filtros aplicados",
      detail: `Filtro por ${field} actualizado`,
      life: 3000,
    });
  };

  const clearFilters = () => {
    setFilters({ category: null, startDate: null, endDate: null });
    toast.current.show({
      severity: "warn",
      summary: "Filtros limpiados",
      detail: "Se eliminaron todos los filtros",
      life: 3000,
    });
  };

  const filteredExpenses = expenses.filter((expense) => {
    const matchesCategory = filters.category
      ? expense.category === filters.category
      : true;
    const matchesStartDate = filters.startDate
      ? new Date(expense.date) >= filters.startDate
      : true;
    const matchesEndDate = filters.endDate
      ? new Date(expense.date) <= filters.endDate
      : true;
    return matchesCategory && matchesStartDate && matchesEndDate;
  });

  const calculateCategoryTotals = () => {
    const totals = {};
    filteredExpenses.forEach((expense) => {
      totals[expense.category] =
        (totals[expense.category] || 0) + expense.amount;
    });
    return totals;
  };

  const categoryTotals = calculateCategoryTotals();

  // Función que manejará la importación de los datos desde el archivo
  const handleImport = (data) => {
    // Validar si los datos importados son correctos
    // Aquí puedes ajustar la validación según la estructura de tus datos
    if (
      data.length === 0 ||
      !data[0].hasOwnProperty("amount") ||
      !data[0].hasOwnProperty("category")
    ) {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "El archivo no contiene datos válidos",
        life: 3000,
      });
      return;
    }

    // Si todo está bien, agregar los datos importados al estado
    setExpenses([...expenses, ...data]);
    toast.current.show({
      severity: "success",
      summary: "Importación exitosa",
      detail: `${data.length} gastos importados`,
      life: 3000,
    });
  };

  return (
    <div>
      <Toast ref={toast} />
      <h1>Gestión de Gastos</h1>
      <ImportExcel onImport={handleImport} />

      <ExpenseForm categories={categories} onSubmit={handleAddExpense} />

      <div className="filters">
        <h2>Filtros</h2>
        <div className="filter-group">
          <label>Categoría</label>
          <Dropdown
            value={filters.category}
            options={categories}
            onChange={(e) => handleFilterChange("category", e.value)}
            placeholder="Selecciona una categoría"
          />
        </div>
        <div className="filter-group">
          <label>Fecha Inicio</label>
          <Calendar
            value={filters.startDate}
            onChange={(e) => handleFilterChange("startDate", e.value)}
            placeholder="Selecciona fecha de inicio"
          />
        </div>
        <div className="filter-group">
          <label>Fecha Fin</label>
          <Calendar
            value={filters.endDate}
            onChange={(e) => handleFilterChange("endDate", e.value)}
            placeholder="Selecciona fecha final"
          />
        </div>
        <Button
          label="Limpiar Filtros"
          onClick={clearFilters}
          className="p-button-secondary"
        />
      </div>

      <div className="category-totals">
        <h2>Totales por Categoría</h2>
        <ul>
          {Object.entries(categoryTotals).map(([category, total]) => (
            <li key={category}>
              <span>
                {categories.find((c) => c.value === category)?.label ||
                  category}
                :
              </span>
              <span>${total.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>

      <ExpenseTable expenses={filteredExpenses} />
      <ExpenseChart categoryTotals={categoryTotals} categories={categories} />
    </div>
  );
};

export default PrincipalSalida;
