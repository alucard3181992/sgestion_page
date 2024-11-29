import React, { useState } from "react";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";

const ExpenseForm = ({ categories, onSubmit }) => {
  const [expense, setExpense] = useState({
    date: null,
    category: "",
    description: "",
    amount: null,
  });

  const handleChange = (e, field) => {
    setExpense({ ...expense, [field]: e.value });
  };

  const handleChange2 = (e, field) => {
    setExpense({ ...expense, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(expense);
    }
    setExpense({ date: null, category: "", description: "", amount: null });
  };

  return (
    <form className="expenseForm" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="date">Fecha</label>
        <Calendar
          id="date"
          value={expense.date}
          onChange={(e) => handleChange(e, "date")}
          placeholder="Selecciona la fecha"
          locale="es"
        />
      </div>
      <div className="field">
        <label htmlFor="category">Categoría</label>
        <Dropdown
          id="category"
          value={expense.category}
          options={categories}
          onChange={(e) => handleChange(e, "category")}
          placeholder="Selecciona una categoría"
        />
      </div>
      <div className="field">
        <label htmlFor="description">Descripción</label>
        <InputText
          id="description"
          value={expense.description}
          onChange={(e) => handleChange2(e, "description")}
          placeholder="Descripción del gasto"
        />
      </div>
      <div className="field">
        <label htmlFor="amount">Monto</label>
        <InputNumber
          id="amount"
          value={expense.amount}
          onValueChange={(e) => handleChange(e, "amount")}
          placeholder="Monto del gasto"
          mode="currency"
          currency="USD"
          locale="en-US"
        />
      </div>
      <Button
        label="Registrar Gasto"
        type="submit"
        className="p-button-success"
      />
    </form>
  );
};

export default ExpenseForm;
