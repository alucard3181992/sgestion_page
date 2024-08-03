import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import VoterTable from './Tabla';
import AuthWrapper from '../Componentes/AuthWrapper';

const categories = [
    { name: 'profesionales', label: 'Profesionales' },
    { name: 'deportes', label: 'Deportes' },
    { name: 'mujeres', label: 'Mujeres' },
    { name: 'universitarios', label: 'Universitarios' },
    { name: 'juntaVecinal', label: 'Junta Vecinal' },
];

const VoterRegistration = () => {
    const [voter, setVoter] = useState({
        nombre: '',
        ci: '',
        categories: categories.reduce((acc, category) => {
            acc[category.name] = { enabled: false, respaldo: '' };
            return acc;
        }, {})
    });
    const [voters, setVoters] = useState([]);
    const toast = React.useRef(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setVoter({ ...voter, [name]: value });
    };

    const handleCheckboxChange = (category) => {
        setVoter({
            ...voter,
            categories: {
                ...voter.categories,
                [category]: {
                    ...voter.categories[category],
                    enabled: !voter.categories[category].enabled,
                }
            }
        });
    };

    const handleRespaldoChange = (category, value) => {
        setVoter({
            ...voter,
            categories: {
                ...voter.categories,
                [category]: {
                    ...voter.categories[category],
                    respaldo: value,
                }
            }
        });
    };

    const handleSubmit = () => {
        // Verificar si el votante ya existe con el mismo nombre y CI
        const duplicate = voters.some(v => v.nombre === voter.nombre && v.ci === voter.ci);

        if (duplicate) {
            toast.current.show({ severity: 'warn', summary: 'Advertencia', detail: 'El votante ya está registrado con el mismo nombre y CI', life: 3000 });
            return;
        }

        setVoters([...voters, { ...voter, id: voters.length + 1 }]);
        setVoter({
            nombre: '',
            ci: '',
            categories: categories.reduce((acc, category) => {
                acc[category.name] = { enabled: false, respaldo: '' };
                return acc;
            }, {})
        });
    };

    return (
        <AuthWrapper correctPassword="votantes12">
            <div className="p-fluid">
                <Toast ref={toast} />
                <div className='grid'>
                    <div className='col-12 text-3xl text-center font-bold underline'>Registro Votante</div>
                    <div className="mb-3 col-12 md:col-6">
                        <span className="p-float-label p-input-icon-right w-full">
                            <InputText id="nombre" name="nombre" value={voter.nombre} onChange={handleInputChange} />
                            <label htmlFor="nombre">Nombre</label>
                        </span>
                    </div>
                    <div className="mb-3 col-12 md:col-6">
                        <span className="p-float-label p-input-icon-right w-full">
                            <InputText id="ci" name="ci" value={voter.ci} onChange={handleInputChange} />
                            <label htmlFor="ci">CI</label>
                        </span>
                    </div>
                </div>

                {categories.map(category => (
                    <div key={category.name} className="p-field-checkbox mb-3 gap-2">
                        <Checkbox
                            inputId={category.name}
                            checked={voter.categories[category.name].enabled}
                            onChange={() => handleCheckboxChange(category.name)}
                            className='mr-2' />
                        <label htmlFor={category.name} className='underline'>{category.label}</label>
                        {voter.categories[category.name].enabled && (
                            <InputTextarea
                                rows={2}
                                cols={30}
                                value={voter.categories[category.name].respaldo}
                                onChange={(e) => handleRespaldoChange(category.name, e.target.value)}
                                placeholder={`Respaldo para ${category.label}`}
                                className='w-full'
                            />
                        )}
                    </div>
                ))}
                <Button label="Registrar Votante" onClick={handleSubmit} />
                <div className='col-12 card mt-3'>
                    {voters.length > 0 && <VoterTable voters={voters} />}
                </div>
            </div>
        </AuthWrapper>
    );
};

export default VoterRegistration;
