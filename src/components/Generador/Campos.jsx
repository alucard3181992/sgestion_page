import { Rating } from "primereact/rating"
import { Button } from "primereact/button"
import { Tag } from "primereact/tag"
import Image from "next/image"

const campos = [{
    id: [
        { label: 'Identificador de Usuario', value: 'idu', value2: 'idu', key: "IDU" },
        { label: 'Identificador de Persona', value: 'idpe', value2: 'persona.idpe', key: "IDPE" },
        /* { label: 'Identificador de Empresa', value: 'idem', value2: 'empresa.idem' }, */
        // Otros campos de tipo texto
    ],
    texto: [
        { label: 'Cedula de Identidad', value: 'ci', requerido: true, value2: 'persona.ci', key: "CI" },
        { label: 'Nombre', value: 'nombre', requerido: true, value2: 'persona.nombre', key: "Nom" },
        // Otros campos de tipo texto
    ],
    fecha: [
        { label: 'Fecha de Nacimiento', value: 'fecnac', value2: 'fecnac', requerido: true, key: "FecNac" },
        { label: 'Fecha de Entrega', value: 'fecent', value2: 'fecent', requerido: true, key: "FecEnt" },
        // Otros campos de tipo fecha
    ],
    checkbox: [
        {
            etiqueta: 'Rol(es)',
            value: 'usurol',
            value2: 'usurol',
            valor: 'roles.idr',
            requerido: true,
            opciones: `Funciones.convierteListas(roles, "value", "nombre", "idr")`,
            key: "Rol(es)"
        },
        // Otros campos de tipo checkbox
    ],
    radiobutton: [
        {
            etiqueta: 'Género',
            value: 'sexo',
            value2: 'sexo',
            requerido: true,
            opciones: [
                { label: 'Masculino', value: 'M', key: "Masculino" },
                { label: 'Femenino', value: 'F', key: "Femenino" },
                // Otras opciones para el campo radiobutton
            ],
            key: "Género",
        },
    ],
    listas: [
        {
            etiqueta: 'Empresa',
            value: 'idem',
            value2: "empresa.idem",
            requerido: true,
            opciones: `Funciones.convierteListas(empresa, "valor", "nom", "idem")`,
            key: "Empresa"
        },
        {
            etiqueta: 'Candidatos',
            value: 'cand',
            value2: 'cand',
            requerido: true,
            opciones: [
                { label: 'Miguel Arzuña', valor: '1', key: "MA" },
                { label: 'Pedro Chupaño', valor: '2', key: "PC" },
                // Otras opciones para el campo radiobutton
            ],
            key: "Candidatos"
        },
        // Otros campos de tipo radiobutton
    ],

    imagen: [
        { label: 'Imagen Personal', value: 'base64', requerido: true, value2: 'persona.base64', key: "ImagenPersonal" },
        //{ label: 'Imagen Secundaria', value: 'imgsec', requerido: true },
    ],
    chips: [
        {
            etiqueta: 'Telefono(s) Personal',
            value: 'telefono',
            value2: 'persona.telefono',
            valor: 'numero',
            telefono: true,
            requerido: true,
            opciones: [],
            key: "Telefono(s) Personal"
        },
        {
            etiqueta: 'Telefono(s) Empresa',
            value: 'telefono2',
            value2: 'empresa.persona.telefono',
            valor: 'numero',
            telefono: true,
            requerido: true,
            opciones: [],
            key: "Telefono(s) Empresa"
        },
    ],
    toggleButton: [
        {
            etiqueta: 'Rol(es)2',
            value: 'usurol2',
            value2: 'usurol',
            valor: 'roles.idr',
            requerido: true,
            opciones: `Funciones.convierteListas(roles, "value", "nombre", "idr")`,
            key: "Rol(es)2"
        },
        {
            etiqueta: 'Genero 2',
            value: 'sexo2',
            value2: 'sexo',
            valor: 'sexo',
            requerido: true,
            opciones: [
                { label: 'Masculino', value: 'M' },
                { label: 'Femenino', value: 'F' },
            ],
            key: "Genero2"
        },
    ]
    // Puedes añadir más tipos y sus respectivos campos según sea necesario
}]
const datosC1 = {
    tablaTitulo: "Registro de Usuarios",
    tablaResponsiva: false,
    tablaColumnasDiferentes: true,
    tablaOrden: "idu",
    tablaOrdenNumero: 1,
    tablaFilas: 5,
    tablaArray: [5, 10, 15],
    tipoDeSeleccion: "multiple",
    expansion: true,
    tituloExpansion: "Expandir",
    listaExpansion: "persona",
    borrarMasivo: { visible: true, funcion: "eliminarMasivo" },
    añadir: { visible: true, funcion: "hola" },
    modificar: { visible: true, funcion: "buscar" },
    ver: { visible: true, funcion: "mostrar" },
    borrar: { visible: true, funcion: "eliminarIndividual" },
    header: true,
    columnasDeBusqueda: ["idu", "sexo", "persona.nombre"],
    columnaAdicionalOpcion: true,
    columnaAdicional: [
        { header: "Modificar2", icon: "pi pi-pencil", generarHandler: "(data) => () => buscar(data)", dialog: "setFormulario", severity: "success", key: "Modificar2" },
        { header: "Modificar3", icon: "pi pi-print", generarHandler: "(data, e, icon) => () => modificar(data, e, icon)", dialog: "setFormulario", severity: "danger", key: "Modificar3" },
    ],
    formularioDialog: {
        principal: { formulario: "formulario", setFormulario: "setFormulario", key: "principal" },
        secundario: { formulario: "formulario2", setFormulario: "setFormulario2", key: "secundario" }
    },
    seleccion2: { id: "idu", estado: "estado", nom: "persona.nombre" },
    formulario: {
        formularioTitulo: "Administrar Usuarios",
        cerrar: "cerrarFormulario",
        botonTitulo: "registro",
        telefono: true,
        nuevo: "nuevo",
        modificar: "modificar",
    }
}

export function mapeoDeCampos() {
    const campos2 = [{
        id: [
            { label: 'Identificador de Usuario', value: 'idu', value2: 'idu', key: "IDU" },
            { label: 'Identificador de Persona', value: 'idpe', value2: 'persona.idpe', key: "IDPE" },
            /* { label: 'Identificador de Empresa', value: 'idem', value2: 'empresa.idem' }, */
            // Otros campos de tipo texto
        ],
        texto: [
            { label: 'Cedula de Identidad', value: 'ci', requerido: true, value2: 'persona.ci', key: "CI" },
            { label: 'Nombre', value: 'nombre', requerido: true, value2: 'persona.nombre', key: "Nom" },
            // Otros campos de tipo texto
        ],
        fecha: [
            { label: 'Fecha de Nacimiento', value: 'fecnac', value2: 'fecnac', requerido: true },
            { label: 'Fecha de Entrega', value: 'fecent', requerido: true },
            // Otros campos de tipo fecha
        ],
        checkbox: [
            /* {
                etiqueta: 'Acepto Términos y Condiciones',
                value: 'Acp',
                requerido: true,
                opciones: [
                    { label: 'Opción 1', value: 'opcion1' },
                    // Otras opciones para el campo checkbox
                ],
            }, */
            /* {
                etiqueta: 'Preferencias',
                value: 'pre',
                requerido: true,
                opciones: [
                    { label: 'Opción 1', value: 'opcion1' },
                    { label: 'Opción 2', value: 'opcion2' },
                    { label: 'Opción 3', value: 'opcion3' },
                    // Otras opciones para el campo checkbox
                ],
            }, */
            {
                etiqueta: 'Rol(es)',
                value: 'usurol',
                value2: 'usurol',
                valor: 'roles.idr',
                requerido: true,
                opciones: `Funciones.convierteListas(roles, 'value', 'nombre', 'idr')`,
                key: "Rol(es)"
            },
            // Otros campos de tipo checkbox
        ],
        radiobutton: [
            {
                etiqueta: 'Género',
                value: 'sexo',
                value2: 'sexo',
                requerido: true,
                opciones: [
                    { label: 'Masculino', value: 'M', key: "Masculino" },
                    { label: 'Femenino', value: 'F', key: "Femenino" },
                    // Otras opciones para el campo radiobutton
                ],
                key: "Género",
            },
            /* {
                etiqueta: 'Turno',
                value: 'turno',
                requerido: true,
                opciones: convierteListas(lista, "valor", "persona.nombre", "idu")
    
            }, */
            // Otros campos de tipo radiobutton
        ],
        listas: [
            {
                etiqueta: 'Empresa',
                value: 'idem',
                value2: "empresa.idem",
                requerido: true,
                opciones: ` Funciones.convierteListas(empresa, 'valor', 'nom', 'idem')`
            },
            {
                etiqueta: 'Candidatos',
                value: 'cand',
                requerido: true,
                opciones: [
                    { label: 'Miguel Arzuña', valor: '1' },
                    { label: 'Pedro Chupaño', valor: '2' },
                    // Otras opciones para el campo radiobutton
                ],
            },
            // Otros campos de tipo radiobutton
        ],

        imagen: [
            { label: 'Imagen Personal', value: 'base64', requerido: true, value2: 'persona.base64' },
            //{ label: 'Imagen Secundaria', value: 'imgsec', requerido: true },
            // Otros campos de tipo texto
        ],
        chips: [
            {
                etiqueta: 'Telefono(s) Personal',
                value: 'telefono',
                value2: 'persona.telefono',
                valor: 'numero',
                telefono: true,
                requerido: true,
                opciones: [],
                key: "Telefono(s) Personal"
            },
            {
                etiqueta: 'Telefono(s) Empresa',
                value: 'telefono2',
                value2: 'empresa.persona.telefono',
                valor: 'numero',
                telefono: true,
                requerido: true,
                opciones: [],
                key: "Telefono(s) Empresa"
            },
            /* {
                etiqueta: 'Rol(es)',
                value: 'usurol',
                value2: 'usurol',
                valor: 'roles.nombre',
                requerido: true,
                opciones: [],
            }, */
        ],
        toggleButton: [
            {
                etiqueta: 'Rol(es)2',
                value: 'usurol2',
                value2: 'usurol',
                valor: 'roles.idr',
                requerido: true,
                opciones: `Funciones.convierteListas(roles, 'value', 'nombre', 'idr')`,
            },
            {
                etiqueta: 'Genero 2',
                value: 'sexo2',
                value2: 'sexo',
                valor: 'sexo',
                requerido: true,
                opciones: [
                    { label: 'Masculino', value: 'M' },
                    { label: 'Femenino', value: 'F' },
                ]
            },
        ]
        // Puedes añadir más tipos y sus respectivos campos según sea necesario
    }]
    return campos2
}
const seleccionBoleanoC = {
    tablaResponsiva: false,
    tablaColumnasDiferentes: true,
    expansion: true,
    header: true,
    borrarMasivo: true,
    añadir: true,
    modificar: true,
    ver: true,
    borrar: true,
    columnaAdicionalOpcion: true,
}
const datosArchivoC = {
    NombreFuncion: "Usuario",
    ListaPrincipal: "usuario",
    ListasAdicionales: [],
    CarpetaApi: "usuarios",
    ArchivoApi: "usuario"
}
const seleccionTextoC = {
    tablaTitulo: "Registro de Usuarios",
    tablaOrden: "idu",
    tipoDeSeleccion: "multiple",
    tituloExpansion: "Expandir",
    listaExpansion: "persona",
}
const seleccionAMVBC = {
    borrarMasivo: { visible: seleccionBoleanoC.borrarMasivo, funcion: "eliminarMasivo" },
    añadir: { visible: seleccionBoleanoC.añadir, funcion: "hola" },
    modificar: { visible: seleccionBoleanoC.modificar, funcion: "buscar" },
    ver: { visible: seleccionBoleanoC.ver, funcion: "mostrar" },
    borrar: { visible: seleccionBoleanoC.borrar, funcion: "eliminarIndividual" },
}
const columnaAdicionalC = [
    { header: "Modificar2", icon: "pi pi-pencil", generarHandler: "(data) => () => buscar(data)", dialog: "setFormulario", severity: "success", key: "Modificar1" },
    { header: "Modificar3", icon: "pi pi-print", generarHandler: "(data, e, icon) => () => modificar(data, e, icon)", dialog: "setFormulario", severity: "danger", key: "Modificar2" },
]
const seleccionArrayC = {
    columnasDeBusqueda: [],
    tablaArray: [],
}
const columnasC = [
    { header: "Codigo", field: "idu", key: "Codigo" },
    { header: "Genero", field: "sexo", key: "sexo" },
    { header: "Nombre", field: "persona.nombre", key: "persona.nombre" },
    { header: "Imagen", field: "persona.base64", key: "persona.base64" },
    { header: "Estado", field: "estado", key: "estado" },
]
const columnasExpasionC = [
    { header: "Cedula", field: "ci", key: "ci" },
    { header: "Nombre", field: "nombre", key: "nombre" },

]

const formularioDatosC = {
    formularioTitulo: "Administrar Usuarios",
    cerrar: "cerrarFormulario",
    botonTitulo: "registro",
    telefono: true,
    nuevo: "nuevo",
    modificar: "modificar",

}
const formulariosC = [
    { titulo: "principal", formulario: "formulario1", setFormulario: "setFormulario1", key: 'principal', },
    { titulo: "secundario", formulario: "formulario2", setFormulario: "setFormulario2", key: 'secundario', }
]
const seleccion2C = { id: "idu", estado: "estado", nom: "persona.nombre" }

const prueba = [
    {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
    },
    {
        id: '1001',
        code: 'nvklal433',
        name: 'Black Watch',
        description: 'Product Description',
        image: 'black-watch.jpg',
        price: 72,
        category: 'Accessories',
        quantity: 61,
        inventoryStatus: 'INSTOCK',
        rating: 4
    },
    {
        id: '1016',
        code: 'k8l6j58jl',
        name: 'Lime Band',
        description: 'Product Description',
        image: 'lime-band.jpg',
        price: 79,
        category: 'Fitness',
        quantity: 12,
        inventoryStatus: 'INSTOCK',
        rating: 3
    },
    {
        id: '1017',
        code: 'v435nn85n',
        name: 'Mini Speakers',
        description: 'Product Description',
        image: 'mini-speakers.jpg',
        price: 85,
        category: 'Clothing',
        quantity: 42,
        inventoryStatus: 'INSTOCK',
        rating: 4
    },
    {
        id: '1018',
        code: '09zx9c0zc',
        name: 'Painted Phone Case',
        description: 'Product Description',
        image: 'painted-phone-case.jpg',
        price: 56,
        category: 'Accessories',
        quantity: 41,
        inventoryStatus: 'INSTOCK',
        rating: 5
    },
    {
        id: '1019',
        code: 'mnb5mb2m5',
        name: 'Pink Band',
        description: 'Product Description',
        image: 'pink-band.jpg',
        price: 79,
        category: 'Fitness',
        quantity: 63,
        inventoryStatus: 'INSTOCK',
        rating: 4
    },
    {
        id: '1020',
        code: 'r23fwf2w3',
        name: 'Pink Purse',
        description: 'Product Description',
        image: 'pink-purse.jpg',
        price: 110,
        category: 'Accessories',
        quantity: 0,
        inventoryStatus: 'OUTOFSTOCK',
        rating: 4
    },
    {
        id: '1021',
        code: 'pxpzczo23',
        name: 'Purple Band',
        description: 'Product Description',
        image: 'purple-band.jpg',
        price: 79,
        category: 'Fitness',
        quantity: 6,
        inventoryStatus: 'LOWSTOCK',
        rating: 3
    },
    {
        id: '1022',
        code: '2c42cb5cb',
        name: 'Purple Gemstone Necklace',
        description: 'Product Description',
        image: 'purple-gemstone-necklace.jpg',
        price: 45,
        category: 'Accessories',
        quantity: 62,
        inventoryStatus: 'INSTOCK',
        rating: 4
    },
    {
        id: '1023',
        code: '5k43kkk23',
        name: 'Purple T-Shirt',
        description: 'Product Description',
        image: 'purple-t-shirt.jpg',
        price: 49,
        category: 'Clothing',
        quantity: 2,
        inventoryStatus: 'LOWSTOCK',
        rating: 5
    },
    {
        id: '1024',
        code: 'lm2tny2k4',
        name: 'Shoes',
        description: 'Product Description',
        image: 'shoes.jpg',
        price: 64,
        category: 'Clothing',
        quantity: 0,
        inventoryStatus: 'INSTOCK',
        rating: 4
    },
    {
        id: '1025',
        code: 'nbm5mv45n',
        name: 'Sneakers',
        description: 'Product Description',
        image: 'sneakers.jpg',
        price: 78,
        category: 'Clothing',
        quantity: 52,
        inventoryStatus: 'INSTOCK',
        rating: 4
    },
    {
        id: '1026',
        code: 'zx23zc42c',
        name: 'Teal T-Shirt',
        description: 'Product Description',
        image: 'teal-t-shirt.jpg',
        price: 49,
        category: 'Clothing',
        quantity: 3,
        inventoryStatus: 'LOWSTOCK',
        rating: 3
    },
    {
        id: '1027',
        code: 'acvx872gc',
        name: 'Yellow Earbuds',
        description: 'Product Description',
        image: 'yellow-earbuds.jpg',
        price: 89,
        category: 'Electronics',
        quantity: 35,
        inventoryStatus: 'INSTOCK',
        rating: 3
    },
    {
        id: '1028',
        code: 'tx125ck42',
        name: 'Yoga Mat',
        description: 'Product Description',
        image: 'yoga-mat.jpg',
        price: 20,
        category: 'Fitness',
        quantity: 15,
        inventoryStatus: 'INSTOCK',
        rating: 5
    },
    {
        id: '1029',
        code: 'gwuby345v',
        name: 'Yoga Set',
        description: 'Product Description',
        image: 'yoga-set.jpg',
        price: 20,
        category: 'Fitness',
        quantity: 25,
        inventoryStatus: 'INSTOCK',
        rating: 8
    }
]
const getSeverity = (product) => {
    switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
}
const itemTemplate = (data) => {
    return (
        <div className="col-12">
            <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                <Image height={100} width={100} className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={`https://primefaces.org/cdn/primereact/images/product/${data.image}`} alt={data.name} />
                <div className="flex flex-column lg:flex-row justify-content-between align-items-center xl:align-items-start lg:flex-1 gap-4">
                    <div className="flex flex-column align-items-center lg:align-items-start gap-3">
                        <div className="flex flex-column gap-1">
                            <div className="text-2xl font-bold text-900">{data.name}</div>
                            <div className="text-700">{data.description}</div>
                        </div>
                        <div className="flex flex-column gap-2">
                            <Rating value={data.rating} readOnly cancel={false}></Rating>
                            <span className="flex align-items-center gap-2">
                                <i className="pi pi-tag product-category-icon"></i>
                                <span className="font-semibold">{data.category}</span>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-row lg:flex-column align-items-center lg:align-items-end gap-4 lg:gap-2">
                        <span className="text-2xl font-semibold">${data.price}</span>
                        <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                        <Tag value={data.inventoryStatus} severity={getSeverity(data)}></Tag>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {
    datosC1,
    campos,
    seleccionBoleanoC,
    datosArchivoC,
    seleccionTextoC,
    seleccionAMVBC,
    columnaAdicionalC,
    seleccionArrayC,
    columnasC,
    formularioDatosC,
    columnasExpasionC,
    formulariosC,
    seleccion2C,
    prueba,
    itemTemplate
}