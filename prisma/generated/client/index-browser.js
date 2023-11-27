
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.6.0
 * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
 */
Prisma.prismaVersion = {
  client: "5.6.0",
  engine: "ac9d7041ed77bcc8a8dbd2ab6616b39013829574"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.ArteScalarFieldEnum = {
  idar: 'idar',
  idu: 'idu',
  idot: 'idot',
  fechar: 'fechar',
  fechaa: 'fechaa',
  idua: 'idua',
  estado: 'estado',
  obs: 'obs',
  precio: 'precio'
};

exports.Prisma.ClienteScalarFieldEnum = {
  idcli: 'idcli',
  idpe: 'idpe',
  estado: 'estado'
};

exports.Prisma.ColorScalarFieldEnum = {
  idcolor: 'idcolor',
  nom: 'nom',
  punit: 'punit',
  idmar: 'idmar',
  estado: 'estado',
  des: 'des'
};

exports.Prisma.ConfiguracionlaboralScalarFieldEnum = {
  idconf: 'idconf',
  entrada: 'entrada',
  salida: 'salida',
  tipo: 'tipo',
  retrasopermitido: 'retrasopermitido',
  adicional: 'adicional',
  adicional1: 'adicional1'
};

exports.Prisma.CotizacionScalarFieldEnum = {
  idcot: 'idcot',
  idu: 'idu',
  idcli: 'idcli',
  fecha: 'fecha',
  precio: 'precio',
  descuento: 'descuento',
  preciofinal: 'preciofinal',
  tiempo: 'tiempo',
  arte: 'arte',
  obs: 'obs',
  estado: 'estado'
};

exports.Prisma.DatosScalarFieldEnum = {
  idu: 'idu',
  login: 'login',
  contrasenia: 'contrasenia'
};

exports.Prisma.DetcotScalarFieldEnum = {
  iddetcot: 'iddetcot',
  idcot: 'idcot',
  idpro: 'idpro',
  cant: 'cant',
  punit: 'punit',
  stotal: 'stotal',
  material: 'material',
  gr: 'gr',
  tintas: 'tintas',
  estado: 'estado'
};

exports.Prisma.DetotScalarFieldEnum = {
  iddetot: 'iddetot',
  idot: 'idot',
  idpro: 'idpro',
  cant: 'cant',
  punit: 'punit',
  stotal: 'stotal',
  material: 'material',
  gr: 'gr',
  tintas: 'tintas',
  estado: 'estado'
};

exports.Prisma.EmpresaScalarFieldEnum = {
  idem: 'idem',
  nom: 'nom',
  dir: 'dir',
  des: 'des',
  dep: 'dep',
  logo: 'logo',
  idpe: 'idpe',
  nit: 'nit',
  auto: 'auto',
  base64: 'base64'
};

exports.Prisma.EventosScalarFieldEnum = {
  idev: 'idev',
  fechainicio: 'fechainicio',
  fechafin: 'fechafin',
  tipo: 'tipo',
  evento: 'evento',
  adicional: 'adicional',
  adicional1: 'adicional1',
  estado: 'estado'
};

exports.Prisma.FacturaScalarFieldEnum = {
  idfac: 'idfac',
  idot: 'idot',
  idu: 'idu',
  monto: 'monto',
  fecha: 'fecha',
  aux: 'aux',
  aux1: 'aux1'
};

exports.Prisma.InventarioScalarFieldEnum = {
  idin: 'idin',
  idprov: 'idprov',
  codigo: 'codigo',
  nom: 'nom',
  precio: 'precio',
  gr: 'gr',
  tam: 'tam',
  des: 'des',
  cant: 'cant',
  estado: 'estado'
};

exports.Prisma.LeyendaScalarFieldEnum = {
  idle: 'idle',
  des: 'des',
  orden: 'orden',
  idem: 'idem'
};

exports.Prisma.MarcaScalarFieldEnum = {
  idmar: 'idmar',
  nom: 'nom',
  des: 'des',
  estado: 'estado'
};

exports.Prisma.MenuScalarFieldEnum = {
  idm: 'idm',
  nom: 'nom',
  url: 'url',
  estado: 'estado'
};

exports.Prisma.OrdentScalarFieldEnum = {
  idot: 'idot',
  idu: 'idu',
  idcli: 'idcli',
  idcot: 'idcot',
  fecha: 'fecha',
  precio: 'precio',
  descuento: 'descuento',
  preciofinal: 'preciofinal',
  tiempo: 'tiempo',
  arte: 'arte',
  obs: 'obs',
  estado: 'estado',
  factura: 'factura'
};

exports.Prisma.PagoScalarFieldEnum = {
  idpagp: 'idpagp',
  idot: 'idot',
  fecha: 'fecha',
  preciof: 'preciof',
  pago: 'pago',
  saldo: 'saldo',
  des: 'des',
  comprobante: 'comprobante'
};

exports.Prisma.PersonaScalarFieldEnum = {
  idpe: 'idpe',
  ci: 'ci',
  nombre: 'nombre',
  ap: 'ap',
  am: 'am',
  direccion: 'direccion',
  email: 'email',
  estado: 'estado',
  base64: 'base64'
};

exports.Prisma.ProductoScalarFieldEnum = {
  idpro: 'idpro',
  nom: 'nom',
  tam: 'tam',
  des: 'des',
  preciov: 'preciov',
  precioc: 'precioc',
  cantidad: 'cantidad',
  foto: 'foto',
  idmar: 'idmar',
  estado: 'estado',
  base64: 'base64',
  ranking: 'ranking'
};

exports.Prisma.ProveedorScalarFieldEnum = {
  idprov: 'idprov',
  nom: 'nom',
  dir: 'dir',
  dep: 'dep',
  logo: 'logo',
  idpe: 'idpe',
  estado: 'estado',
  nit: 'nit'
};

exports.Prisma.RegistrolaboralScalarFieldEnum = {
  idre: 'idre',
  idu: 'idu',
  tiporegistro: 'tiporegistro',
  fecha: 'fecha',
  hora: 'hora',
  mes: 'mes',
  estado: 'estado',
  adicional: 'adicional',
  adicional2: 'adicional2',
  atraso: 'atraso'
};

exports.Prisma.RolesScalarFieldEnum = {
  idr: 'idr',
  nombre: 'nombre',
  descrip: 'descrip',
  jerarquia: 'jerarquia',
  estado: 'estado'
};

exports.Prisma.RolmenuScalarFieldEnum = {
  idr: 'idr',
  idm: 'idm'
};

exports.Prisma.TelefonoScalarFieldEnum = {
  idtel: 'idtel',
  idpe: 'idpe',
  numero: 'numero',
  estado: 'estado'
};

exports.Prisma.TerminadoScalarFieldEnum = {
  idter: 'idter',
  nom: 'nom',
  punit: 'punit',
  idmar: 'idmar',
  estado: 'estado'
};

exports.Prisma.UsuarioScalarFieldEnum = {
  idu: 'idu',
  sexo: 'sexo',
  foto: 'foto',
  fecnac: 'fecnac',
  idpe: 'idpe',
  estado: 'estado',
  idem: 'idem',
  base64: 'base64'
};

exports.Prisma.UsurolScalarFieldEnum = {
  idr: 'idr',
  idu: 'idu'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  arte: 'arte',
  cliente: 'cliente',
  color: 'color',
  configuracionlaboral: 'configuracionlaboral',
  cotizacion: 'cotizacion',
  datos: 'datos',
  detcot: 'detcot',
  detot: 'detot',
  empresa: 'empresa',
  eventos: 'eventos',
  factura: 'factura',
  inventario: 'inventario',
  leyenda: 'leyenda',
  marca: 'marca',
  menu: 'menu',
  ordent: 'ordent',
  pago: 'pago',
  persona: 'persona',
  producto: 'producto',
  proveedor: 'proveedor',
  registrolaboral: 'registrolaboral',
  roles: 'roles',
  rolmenu: 'rolmenu',
  telefono: 'telefono',
  terminado: 'terminado',
  usuario: 'usuario',
  usurol: 'usurol'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
