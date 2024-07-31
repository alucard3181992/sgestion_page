
//carpeta componentes
import React, { useEffect, useState, useContext } from "react"
import TablaPrincipal from "@/components/Tabla/Tabla"
import { productos } from "./data"
import ProductList from "./ProductList"
import SaleForm2 from "./SaleForm"
import SaleDetails2 from "./SaleDetails"
export default function VistaProductos() {

    const [formulario, setFormulario] = useState(false)
    /*provisiorio*/
    const [saleDetails, setSaleDetails] = useState([]);

    const addProductToSale = (product) => {
        const existingProduct = saleDetails.find((p) => p.idpro === product.idpro);
        if (existingProduct) {
            setSaleDetails(saleDetails.map((p) => (p.idpro === product.idpro ? { ...p, cant: p.cant + 1 } : p)));
        } else {
            setSaleDetails([...saleDetails, { ...product, cant: 1 }]);
        }
    };
    const updateSaleDetail = (updatedProduct) => {
        setSaleDetails(saleDetails.map((p) => (p.idpro === updatedProduct.idpro ? updatedProduct : p)));
    };

    function hola(mensaje) {
        console.log("HOLA MUNDO: ", mensaje)
    }
    const lista = productos.map(item => ({
        idpro: item.idpro,
        nombre: item.nombre,
        cantidad: item.cant,
        ranking: item.ranking,
        estado: item.estadop,
        //prev: item.prev,
    }));

    const datos = {
        tablaTitulo: "Registro de Productos",
        tablaResponsiva: false,
        tablaColumnasDiferentes: true,
        tablaOrden: "idpro",
        tablaOrdenNumero: 1,
        tablaFilas: 5,
        tablaArray: [
            5,
            20,
            30
        ],
        tipoDeSeleccion: "multiple",
        expansion: false,
        //añadir
        expansionNormal: false,
        expansionModulo: null,//VistaMapaRegistro,
        expansionProps: [
            { latitud: "lat", },
            { longitud: "longi" },
            { nombre: "nombre" },
            { ubicacion: "ubicacion" },
            { departamento: "dp" }
        ],
        expansionPropsObjeto: true,
        //hasta aqui
        tituloExpansion: "Expandir",
        listaExpansion: "persona",
        borrarMasivo: {
            visible: false,
            funcion: null
        },
        añadir: {
            visible: false,
            funcion: hola
        },
        modificar: {
            visible: false,
            funcion: null
        },
        ver: {
            visible: false,
            funcion: null
        },
        borrar: {
            visible: false,
            funcion: null
        },
        header: true,
        columnasDeBusqueda: [
            "idpro",
            "nombre",
            "cant"
        ],
        columnaAdicionalOpcion: true,
        columnaAdicional: [
            /* {
                header: "Modificar",
                icon: "pi pi-pencil",
                generarHandler: (data, col) => () => {
                    // Ejecuta la función buscar con los datos proporcionados
                    console.log(data, col);
                },
                componente: false,
                componenteModulo: null,
                dialog: formulario,
                setDialog: setFormulario,
                severity: "success"
            }, */
            {
                header: "Agregar",
                icon: "pi pi-plus",
                generarHandler: (data, col) => () => {
                    // Ejecuta la función buscar con los datos proporcionados
                    addProductToSale(data);
                },
                componente: false,
                componenteModulo: null,
                dialog: formulario,
                setDialog: setFormulario,
                severity: "success"
            },
        ],
        formularioDialog: {
            principal: {
                formulario: formulario,
                setFormulario: setFormulario,
                key: "principal"
            }
        },
        seleccion2: {
            id: "idu",
            estado: "estado",
            nom: "persona.nombre"
        },
        formulario: {
            formularioTitulo: "Administrar Usuarios",
            cerrar: null,
            botonTitulo: "NADA",
            telefono: false,
            roles: false,
            listas: false,
            nuevo: null,
            modificar: null,
            campos: [
            ]
        }
    }
    /* "id": 1,
            "table_name": "dg",
            "operation_type": "UPDATE",
            "operation_time": "2024-07-29T21:24:40.164Z",
            "user_name": "postgres", */
    const columnas = [
        {
            header: "Codigo",
            field: "idpro",
            key: "Codigo"
        },
        {
            header: "Nombre",
            field: "nombre",
            key: "persona.nombre"
        },
        {
            header: "Cantidad",
            field: "cant",
            key: "persona.ap"
        },
        {
            header: "Ranking",
            field: "ranking",
            key: "persona.am"
        },

        {
            header: "Estado",
            field: "estadop",
            key: "persona.am"
        },
    ]

    const columnasExpasion = [

    ]


    useEffect(() => {
        /* console.log("Los datos son HOLA djdfhjdskhjk", usuario); */
    }, [lista]);
    const estados = { v: "STOCK", f: "NO STOCK" }

    return (
        <React.Fragment>
            <TablaPrincipal
                lista={productos}
                datos={datos}
                columnas={columnas}
                columnasExpasion={columnasExpasion}
                datosCliente={null}>
            </TablaPrincipal>
            <SaleDetails2
                details={saleDetails}
                onUpdateDetail={updateSaleDetail}
                field="cant" />
            <SaleForm2 initialProducts={lista} estados={estados} />
        </React.Fragment>
    );
}
