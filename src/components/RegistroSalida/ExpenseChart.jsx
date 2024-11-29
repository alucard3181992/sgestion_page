import React, { useState } from 'react';
import { Chart } from 'primereact/chart';
import { Dropdown } from 'primereact/dropdown';

const ExpenseChart = ({ categoryTotals, categories }) => {
    const [chartType, setChartType] = useState('bar');

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
    };

    const categoryLabels = categories.map((c) => c.label);
    const categoryValues = categories.map((c) => categoryTotals[c.value] || 0);

    const chartData = {
        labels: categoryLabels,
        datasets: [
            {
                label: 'Gastos por Categoría',
                data: categoryValues,
                backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726'],
                hoverBackgroundColor: ['#64B5F6', '#81C784', '#FFB74D'],
            },
        ],
    };

    const chartTypes = [
        { label: 'Barra', value: 'bar' },
        { label: 'Pastel', value: 'pie' },
    ];

    return (
        <div className="expense-chart">
            <h2>Reporte de Gastos</h2>
            <div className="chart-type-selector">
                <label>Tipo de Gráfico</label>
                <Dropdown
                    value={chartType}
                    options={chartTypes}
                    onChange={(e) => setChartType(e.value)}
                    placeholder="Selecciona un tipo de gráfico"
                />
            </div>
            <Chart type={chartType} data={chartData} options={chartOptions} />
        </div>
    );
};

export default ExpenseChart;
