import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const CustomerSelector = ({ customers, onAddCustomer }) => {
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [newCustomerDialog, setNewCustomerDialog] = useState(false);
    const [newCustomer, setNewCustomer] = useState({});

    const addNewCustomer = () => {
        onAddCustomer(newCustomer);
        setNewCustomerDialog(false);
        setNewCustomer({});
    };

    return (
        <div>
            <h2>Seleccionar Cliente</h2>
            <Dropdown 
                value={selectedCustomer} 
                options={customers} 
                onChange={(e) => setSelectedCustomer(e.value)} 
                optionLabel="name" 
                placeholder="Seleccionar Cliente"
            />
            <Button label="Nuevo Cliente" onClick={() => setNewCustomerDialog(true)} />
            <Dialog header="Nuevo Cliente" visible={newCustomerDialog} onHide={() => setNewCustomerDialog(false)}>
                <InputText placeholder="Nombre" value={newCustomer.name} onChange={(e) => setNewCustomer({...newCustomer, name: e.target.value})} />
                {/* Agrega más campos según sea necesario */}
                <Button label="Agregar" onClick={addNewCustomer} />
            </Dialog>
        </div>
    );
};

export default CustomerSelector;
