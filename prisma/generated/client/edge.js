
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/edge')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "E:\\proyectos de React\\SGestion\\sgestion_page\\prisma\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.6.0",
  "engineVersion": "ac9d7041ed77bcc8a8dbd2ab6616b39013829574",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "POSTGRES_PRISMA_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuL2dlbmVyYXRlZC9jbGllbnQiCn0KCmRhdGFzb3VyY2UgZGIgewogIHByb3ZpZGVyICA9ICJwb3N0Z3Jlc3FsIgogIHVybCAgICAgICA9IGVudigiUE9TVEdSRVNfUFJJU01BX1VSTCIpCiAgZGlyZWN0VXJsID0gZW52KCJQT1NUR1JFU19VUkxfTk9OX1BPT0xJTkciKQp9Cgptb2RlbCBhcnRlIHsKICBpZGFyICAgICAgICAgICAgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBpZHUgICAgICAgICAgICAgICAgICAgICAgICBJbnQ/CiAgaWRvdCAgICAgICAgICAgICAgICAgICAgICAgSW50PwogIGZlY2hhciAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyBAZGIuVGltZXN0YW1wKDYpCiAgZmVjaGFhICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/IEBkYi5UaW1lc3RhbXAoNikKICBpZHVhICAgICAgICAgICAgICAgICAgICAgICBJbnQ/CiAgZXN0YWRvICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDIwMCkKICBvYnMgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNTAwKQogIHByZWNpbyAgICAgICAgICAgICAgICAgICAgIEZsb2F0PwogIG9yZGVudCAgICAgICAgICAgICAgICAgICAgIG9yZGVudD8gICBAcmVsYXRpb24oZmllbGRzOiBbaWRvdF0sIHJlZmVyZW5jZXM6IFtpZG90XSwgb25EZWxldGU6IE5vQWN0aW9uLCBvblVwZGF0ZTogTm9BY3Rpb24pCiAgdXN1YXJpb19hcnRlX2lkdVRvdXN1YXJpbyAgdXN1YXJpbz8gIEByZWxhdGlvbigiYXJ0ZV9pZHVUb3VzdWFyaW8iLCBmaWVsZHM6IFtpZHVdLCByZWZlcmVuY2VzOiBbaWR1XSwgb25EZWxldGU6IE5vQWN0aW9uLCBvblVwZGF0ZTogTm9BY3Rpb24pCiAgdXN1YXJpb19hcnRlX2lkdWFUb3VzdWFyaW8gdXN1YXJpbz8gIEByZWxhdGlvbigiYXJ0ZV9pZHVhVG91c3VhcmlvIiwgZmllbGRzOiBbaWR1YV0sIHJlZmVyZW5jZXM6IFtpZHVdLCBvbkRlbGV0ZTogTm9BY3Rpb24sIG9uVXBkYXRlOiBOb0FjdGlvbikKfQoKbW9kZWwgY2xpZW50ZSB7CiAgaWRjbGkgICAgICBJbnQgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBpZHBlICAgICAgIEludAogIGVzdGFkbyAgICAgQm9vbGVhbj8gICAgIEBkZWZhdWx0KHRydWUpCiAgcGVyc29uYSAgICBwZXJzb25hICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkcGVdLCByZWZlcmVuY2VzOiBbaWRwZV0sIG9uRGVsZXRlOiBOb0FjdGlvbiwgb25VcGRhdGU6IE5vQWN0aW9uKQogIGNvdGl6YWNpb24gY290aXphY2lvbltdCiAgb3JkZW50ICAgICBvcmRlbnRbXQp9Cgptb2RlbCBjb2xvciB7CiAgaWRjb2xvciBJbnQgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIG5vbSAgICAgU3RyaW5nPyAgQGRiLlZhckNoYXIoMjAwKQogIHB1bml0ICAgRmxvYXQ/CiAgaWRtYXIgICBJbnQ/CiAgZXN0YWRvICBCb29sZWFuPyBAZGVmYXVsdCh0cnVlKQogIGRlcyAgICAgU3RyaW5nPyAgQGRiLlZhckNoYXIKICBtYXJjYSAgIG1hcmNhPyAgIEByZWxhdGlvbihmaWVsZHM6IFtpZG1hcl0sIHJlZmVyZW5jZXM6IFtpZG1hcl0sIG9uRGVsZXRlOiBOb0FjdGlvbiwgb25VcGRhdGU6IE5vQWN0aW9uKQp9Cgptb2RlbCBjb25maWd1cmFjaW9ubGFib3JhbCB7CiAgaWRjb25mICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBlbnRyYWRhICAgICAgICAgIERhdGVUaW1lPyBAZGIuVGltZSg2KQogIHNhbGlkYSAgICAgICAgICAgRGF0ZVRpbWU/IEBkYi5UaW1lKDYpCiAgdGlwbyAgICAgICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIKICByZXRyYXNvcGVybWl0aWRvIFN0cmluZz8gICBAZGIuVmFyQ2hhcgogIGFkaWNpb25hbCAgICAgICAgRGF0ZVRpbWU/IEBkYi5UaW1ldHooNikKICBhZGljaW9uYWwxICAgICAgIERhdGVUaW1lPyBAZGIuVGltZXR6KDYpCn0KCm1vZGVsIGNvdGl6YWNpb24gewogIGlkY290ICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIGlkdSAgICAgICAgIEludD8KICBpZGNsaSAgICAgICBJbnQ/CiAgZmVjaGEgICAgICAgRGF0ZVRpbWU/IEBkYi5UaW1lc3RhbXAoNikKICBwcmVjaW8gICAgICBGbG9hdD8KICBkZXNjdWVudG8gICBGbG9hdD8KICBwcmVjaW9maW5hbCBGbG9hdD8KICB0aWVtcG8gICAgICBJbnQ/CiAgYXJ0ZSAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDIwMCkKICBvYnMgICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNTAwKQogIGVzdGFkbyAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyMDApCiAgY2xpZW50ZSAgICAgY2xpZW50ZT8gIEByZWxhdGlvbihmaWVsZHM6IFtpZGNsaV0sIHJlZmVyZW5jZXM6IFtpZGNsaV0sIG9uRGVsZXRlOiBOb0FjdGlvbiwgb25VcGRhdGU6IE5vQWN0aW9uKQogIHVzdWFyaW8gICAgIHVzdWFyaW8/ICBAcmVsYXRpb24oZmllbGRzOiBbaWR1XSwgcmVmZXJlbmNlczogW2lkdV0sIG9uRGVsZXRlOiBOb0FjdGlvbiwgb25VcGRhdGU6IE5vQWN0aW9uKQogIGRldGNvdCAgICAgIGRldGNvdFtdCiAgb3JkZW50ICAgICAgb3JkZW50W10KfQoKbW9kZWwgZGF0b3MgewogIGlkdSAgICAgICAgIEludAogIGxvZ2luICAgICAgIFN0cmluZyAgQGlkIEBkYi5WYXJDaGFyKDEwKQogIGNvbnRyYXNlbmlhIFN0cmluZyAgQGRiLlZhckNoYXIoMTApCiAgdXN1YXJpbyAgICAgdXN1YXJpbyBAcmVsYXRpb24oZmllbGRzOiBbaWR1XSwgcmVmZXJlbmNlczogW2lkdV0sIG9uRGVsZXRlOiBOb0FjdGlvbiwgb25VcGRhdGU6IE5vQWN0aW9uKQp9Cgptb2RlbCBkZXRjb3QgewogIGlkZGV0Y290ICAgSW50ICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBpZGNvdCAgICAgIEludD8KICBpZHBybyAgICAgIEludD8KICBjYW50ICAgICAgIEludD8KICBwdW5pdCAgICAgIEZsb2F0PwogIHN0b3RhbCAgICAgRmxvYXQ/CiAgbWF0ZXJpYWwgICBTdHJpbmc/ICAgICBAZGIuVmFyQ2hhcigyMDApCiAgZ3IgICAgICAgICBTdHJpbmc/ICAgICBAZGIuVmFyQ2hhcigyMDApCiAgdGludGFzICAgICBTdHJpbmc/ICAgICBAZGIuVmFyQ2hhcgogIGVzdGFkbyAgICAgQm9vbGVhbj8gICAgQGRlZmF1bHQodHJ1ZSkKICBjb3RpemFjaW9uIGNvdGl6YWNpb24/IEByZWxhdGlvbihmaWVsZHM6IFtpZGNvdF0sIHJlZmVyZW5jZXM6IFtpZGNvdF0sIG9uRGVsZXRlOiBOb0FjdGlvbiwgb25VcGRhdGU6IE5vQWN0aW9uKQogIHByb2R1Y3RvICAgcHJvZHVjdG8/ICAgQHJlbGF0aW9uKGZpZWxkczogW2lkcHJvXSwgcmVmZXJlbmNlczogW2lkcHJvXSwgb25EZWxldGU6IE5vQWN0aW9uLCBvblVwZGF0ZTogTm9BY3Rpb24pCn0KCm1vZGVsIGRldG90IHsKICBpZGRldG90ICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBpZG90ICAgICBJbnQ/CiAgaWRwcm8gICAgSW50PwogIGNhbnQgICAgIEludD8KICBwdW5pdCAgICBGbG9hdD8KICBzdG90YWwgICBGbG9hdD8KICBtYXRlcmlhbCBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjAwKQogIGdyICAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyMDApCiAgdGludGFzICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyCiAgZXN0YWRvICAgQm9vbGVhbj8gIEBkZWZhdWx0KHRydWUpCiAgb3JkZW50ICAgb3JkZW50PyAgIEByZWxhdGlvbihmaWVsZHM6IFtpZG90XSwgcmVmZXJlbmNlczogW2lkb3RdLCBvbkRlbGV0ZTogTm9BY3Rpb24sIG9uVXBkYXRlOiBOb0FjdGlvbikKICBwcm9kdWN0byBwcm9kdWN0bz8gQHJlbGF0aW9uKGZpZWxkczogW2lkcHJvXSwgcmVmZXJlbmNlczogW2lkcHJvXSwgb25EZWxldGU6IE5vQWN0aW9uLCBvblVwZGF0ZTogTm9BY3Rpb24pCn0KCm1vZGVsIGVtcHJlc2EgewogIGlkZW0gICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgbm9tICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoNDApCiAgZGlyICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjAwKQogIGRlcyAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDIwMCkKICBkZXAgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigxMDApCiAgbG9nbyAgICBCeXRlcz8KICBpZHBlICAgIEludD8KICBuaXQgICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcgogIGF1dG8gICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyCiAgYmFzZTY0ICBTdHJpbmc/ICAgQGRiLlZhckNoYXIKICBwZXJzb25hIHBlcnNvbmE/ICBAcmVsYXRpb24oZmllbGRzOiBbaWRwZV0sIHJlZmVyZW5jZXM6IFtpZHBlXSwgb25EZWxldGU6IE5vQWN0aW9uLCBvblVwZGF0ZTogTm9BY3Rpb24pCiAgbGV5ZW5kYSBsZXllbmRhW10KICB1c3VhcmlvIHVzdWFyaW9bXQp9Cgptb2RlbCBldmVudG9zIHsKICBpZGV2ICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBmZWNoYWluaWNpbyBEYXRlVGltZT8gQGRiLkRhdGUKICBmZWNoYWZpbiAgICBEYXRlVGltZT8gQGRiLkRhdGUKICB0aXBvICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIKICBldmVudG8gICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIKICBhZGljaW9uYWwgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIKICBhZGljaW9uYWwxICBTdHJpbmc/ICAgQGRiLlZhckNoYXIKICBlc3RhZG8gICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIKfQoKbW9kZWwgZmFjdHVyYSB7CiAgaWRmYWMgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBpZG90ICAgIEludD8KICBpZHUgICAgIEludD8KICBtb250byAgIEZsb2F0PwogIGZlY2hhICAgRGF0ZVRpbWU/IEBkYi5UaW1lc3RhbXAoNikKICBhdXggICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcgogIGF1eDEgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyCiAgb3JkZW50ICBvcmRlbnQ/ICAgQHJlbGF0aW9uKGZpZWxkczogW2lkb3RdLCByZWZlcmVuY2VzOiBbaWRvdF0sIG9uRGVsZXRlOiBOb0FjdGlvbiwgb25VcGRhdGU6IE5vQWN0aW9uKQogIHVzdWFyaW8gdXN1YXJpbz8gIEByZWxhdGlvbihmaWVsZHM6IFtpZHVdLCByZWZlcmVuY2VzOiBbaWR1XSwgb25EZWxldGU6IE5vQWN0aW9uLCBvblVwZGF0ZTogTm9BY3Rpb24pCn0KCm1vZGVsIGludmVudGFyaW8gewogIGlkaW4gICAgICBJbnQgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgaWRwcm92ICAgIEludD8KICBjb2RpZ28gICAgU3RyaW5nPyAgICBAZGIuVmFyQ2hhcgogIG5vbSAgICAgICBTdHJpbmc/ICAgIEBkYi5WYXJDaGFyCiAgcHJlY2lvICAgIEZsb2F0PwogIGdyICAgICAgICBGbG9hdD8KICB0YW0gICAgICAgU3RyaW5nPyAgICBAZGIuVmFyQ2hhcgogIGRlcyAgICAgICBTdHJpbmc/ICAgIEBkYi5WYXJDaGFyCiAgY2FudCAgICAgIEludD8KICBlc3RhZG8gICAgQm9vbGVhbj8gICBAZGVmYXVsdCh0cnVlKQogIHByb3ZlZWRvciBwcm92ZWVkb3I/IEByZWxhdGlvbihmaWVsZHM6IFtpZHByb3ZdLCByZWZlcmVuY2VzOiBbaWRwcm92XSwgb25EZWxldGU6IE5vQWN0aW9uLCBvblVwZGF0ZTogTm9BY3Rpb24pCn0KCm1vZGVsIGxleWVuZGEgewogIGlkbGUgICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBkZXMgICAgIFN0cmluZz8gIEBkYi5WYXJDaGFyKDIwMCkKICBvcmRlbiAgIEludD8KICBpZGVtICAgIEludD8KICBlbXByZXNhIGVtcHJlc2E/IEByZWxhdGlvbihmaWVsZHM6IFtpZGVtXSwgcmVmZXJlbmNlczogW2lkZW1dLCBvbkRlbGV0ZTogTm9BY3Rpb24sIG9uVXBkYXRlOiBOb0FjdGlvbikKfQoKbW9kZWwgbWFyY2EgewogIGlkbWFyICAgICBJbnQgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIG5vbSAgICAgICBTdHJpbmc/ICAgICBAZGIuVmFyQ2hhcigyMDApCiAgZGVzICAgICAgIFN0cmluZz8gICAgIEBkYi5WYXJDaGFyKDIwMCkKICBlc3RhZG8gICAgQm9vbGVhbj8gICAgQGRlZmF1bHQodHJ1ZSkKICBjb2xvciAgICAgY29sb3JbXQogIHByb2R1Y3RvICBwcm9kdWN0b1tdCiAgdGVybWluYWRvIHRlcm1pbmFkb1tdCn0KCm1vZGVsIG1lbnUgewogIGlkbSAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgbm9tICAgICBTdHJpbmcgICAgQGRiLlZhckNoYXIoNDApCiAgdXJsICAgICBTdHJpbmcgICAgQGRiLlZhckNoYXIoMjAwKQogIGVzdGFkbyAgQm9vbGVhbj8gIEBkZWZhdWx0KHRydWUpCiAgcm9sbWVudSByb2xtZW51W10KfQoKbW9kZWwgb3JkZW50IHsKICBpZG90ICAgICAgICBJbnQgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIGlkdSAgICAgICAgIEludD8KICBpZGNsaSAgICAgICBJbnQ/CiAgaWRjb3QgICAgICAgSW50PwogIGZlY2hhICAgICAgIERhdGVUaW1lPyAgIEBkYi5UaW1lc3RhbXAoNikKICBwcmVjaW8gICAgICBGbG9hdD8KICBkZXNjdWVudG8gICBGbG9hdD8KICBwcmVjaW9maW5hbCBGbG9hdD8KICB0aWVtcG8gICAgICBJbnQ/CiAgYXJ0ZSAgICAgICAgU3RyaW5nPyAgICAgQGRiLlZhckNoYXIoMjAwKQogIG9icyAgICAgICAgIFN0cmluZz8gICAgIEBkYi5WYXJDaGFyKDUwMCkKICBlc3RhZG8gICAgICBTdHJpbmc/ICAgICBAZGIuVmFyQ2hhcigyMDApCiAgZmFjdHVyYSAgICAgU3RyaW5nPyAgICAgQGRiLlZhckNoYXIKICBhcnRlMSAgICAgICBhcnRlW10KICBkZXRvdCAgICAgICBkZXRvdFtdCiAgZmFjdHVyYTEgICAgZmFjdHVyYVtdCiAgY2xpZW50ZSAgICAgY2xpZW50ZT8gICAgQHJlbGF0aW9uKGZpZWxkczogW2lkY2xpXSwgcmVmZXJlbmNlczogW2lkY2xpXSwgb25EZWxldGU6IE5vQWN0aW9uLCBvblVwZGF0ZTogTm9BY3Rpb24pCiAgY290aXphY2lvbiAgY290aXphY2lvbj8gQHJlbGF0aW9uKGZpZWxkczogW2lkY290XSwgcmVmZXJlbmNlczogW2lkY290XSwgb25EZWxldGU6IE5vQWN0aW9uLCBvblVwZGF0ZTogTm9BY3Rpb24pCiAgdXN1YXJpbyAgICAgdXN1YXJpbz8gICAgQHJlbGF0aW9uKGZpZWxkczogW2lkdV0sIHJlZmVyZW5jZXM6IFtpZHVdLCBvbkRlbGV0ZTogTm9BY3Rpb24sIG9uVXBkYXRlOiBOb0FjdGlvbikKICBwYWdvICAgICAgICBwYWdvW10KfQoKbW9kZWwgcGFnbyB7CiAgaWRwYWdwICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgaWRvdCAgICAgICAgSW50PwogIGZlY2hhICAgICAgIERhdGVUaW1lPyBAZGIuVGltZXN0YW1wKDYpCiAgcHJlY2lvZiAgICAgRmxvYXQ/CiAgcGFnbyAgICAgICAgRmxvYXQ/CiAgc2FsZG8gICAgICAgRmxvYXQ/CiAgZGVzICAgICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDUwMCkKICBjb21wcm9iYW50ZSBCeXRlcz8KICBvcmRlbnQgICAgICBvcmRlbnQ/ICAgQHJlbGF0aW9uKGZpZWxkczogW2lkb3RdLCByZWZlcmVuY2VzOiBbaWRvdF0sIG9uRGVsZXRlOiBOb0FjdGlvbiwgb25VcGRhdGU6IE5vQWN0aW9uKQp9Cgptb2RlbCBwZXJzb25hIHsKICBpZHBlICAgICAgSW50ICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBjaSAgICAgICAgU3RyaW5nICAgICAgQGRiLlZhckNoYXIoMjApCiAgbm9tYnJlICAgIFN0cmluZyAgICAgIEBkYi5WYXJDaGFyKDYwKQogIGFwICAgICAgICBTdHJpbmcgICAgICBAZGIuVmFyQ2hhcig0MCkKICBhbSAgICAgICAgU3RyaW5nPyAgICAgQGRiLlZhckNoYXIoNDApCiAgZGlyZWNjaW9uIFN0cmluZz8gICAgIEBkYi5WYXJDaGFyKDIwMCkKICBlbWFpbCAgICAgU3RyaW5nPyAgICAgQGRiLlZhckNoYXIoMTAwKQogIGVzdGFkbyAgICBCb29sZWFuPyAgICBAZGVmYXVsdCh0cnVlKQogIGJhc2U2NCAgICBTdHJpbmc/ICAgICBAZGIuVmFyQ2hhcgogIGNsaWVudGUgICBjbGllbnRlW10KICBlbXByZXNhICAgZW1wcmVzYVtdCiAgcHJvdmVlZG9yIHByb3ZlZWRvcltdCiAgdGVsZWZvbm8gIHRlbGVmb25vW10KICB1c3VhcmlvICAgdXN1YXJpb1tdCn0KCm1vZGVsIHByb2R1Y3RvIHsKICBpZHBybyAgICBJbnQgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIG5vbSAgICAgIFN0cmluZz8gIEBkYi5WYXJDaGFyKDIwMCkKICB0YW0gICAgICBTdHJpbmc/ICBAZGIuVmFyQ2hhcigyMDApCiAgZGVzICAgICAgU3RyaW5nPyAgQGRiLlZhckNoYXIoMjAwKQogIHByZWNpb3YgIEZsb2F0PwogIHByZWNpb2MgIEZsb2F0PwogIGNhbnRpZGFkIEludD8KICBmb3RvICAgICBCeXRlcz8KICBpZG1hciAgICBJbnQ/CiAgZXN0YWRvICAgQm9vbGVhbj8gQGRlZmF1bHQodHJ1ZSkKICBiYXNlNjQgICBTdHJpbmc/ICBAZGIuVmFyQ2hhcgogIHJhbmtpbmcgIEludD8KICBkZXRjb3QgICBkZXRjb3RbXQogIGRldG90ICAgIGRldG90W10KICBtYXJjYSAgICBtYXJjYT8gICBAcmVsYXRpb24oZmllbGRzOiBbaWRtYXJdLCByZWZlcmVuY2VzOiBbaWRtYXJdLCBvbkRlbGV0ZTogTm9BY3Rpb24sIG9uVXBkYXRlOiBOb0FjdGlvbikKfQoKbW9kZWwgcHJvdmVlZG9yIHsKICBpZHByb3YgICAgIEludCAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIG5vbSAgICAgICAgU3RyaW5nPyAgICAgIEBkYi5WYXJDaGFyCiAgZGlyICAgICAgICBTdHJpbmc/ICAgICAgQGRiLlZhckNoYXIKICBkZXAgICAgICAgIFN0cmluZz8gICAgICBAZGIuVmFyQ2hhcgogIGxvZ28gICAgICAgQnl0ZXM/CiAgaWRwZSAgICAgICBJbnQ/CiAgZXN0YWRvICAgICBCb29sZWFuPyAgICAgQGRlZmF1bHQodHJ1ZSkKICBuaXQgICAgICAgIFN0cmluZz8gICAgICBAZGIuVmFyQ2hhcgogIGludmVudGFyaW8gaW52ZW50YXJpb1tdCiAgcGVyc29uYSAgICBwZXJzb25hPyAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkcGVdLCByZWZlcmVuY2VzOiBbaWRwZV0sIG9uRGVsZXRlOiBOb0FjdGlvbiwgb25VcGRhdGU6IE5vQWN0aW9uKQp9Cgptb2RlbCByZWdpc3Ryb2xhYm9yYWwgewogIGlkcmUgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBpZHUgICAgICAgICAgSW50PwogIHRpcG9yZWdpc3RybyBTdHJpbmc/ICAgQGRiLlZhckNoYXIKICBmZWNoYSAgICAgICAgRGF0ZVRpbWU/IEBkYi5EYXRlCiAgaG9yYSAgICAgICAgIERhdGVUaW1lPyBAZGIuVGltZSg2KQogIG1lcyAgICAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIKICBlc3RhZG8gICAgICAgU3RyaW5nPyAgIEBkYi5WYXJDaGFyCiAgYWRpY2lvbmFsICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcgogIGFkaWNpb25hbDIgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIKICBhdHJhc28gICAgICAgRGF0ZVRpbWU/IEBkYi5UaW1lKDYpCiAgdXN1YXJpbyAgICAgIHVzdWFyaW8/ICBAcmVsYXRpb24oZmllbGRzOiBbaWR1XSwgcmVmZXJlbmNlczogW2lkdV0sIG9uRGVsZXRlOiBOb0FjdGlvbiwgb25VcGRhdGU6IE5vQWN0aW9uKQp9Cgptb2RlbCByb2xlcyB7CiAgaWRyICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIG5vbWJyZSAgICBTdHJpbmcgICAgQGRiLlZhckNoYXIoNDApCiAgZGVzY3JpcCAgIFN0cmluZyAgICBAZGIuVmFyQ2hhcigxMDApCiAgamVyYXJxdWlhIEludAogIGVzdGFkbyAgICBCb29sZWFuICAgQGRlZmF1bHQodHJ1ZSkKICByb2xtZW51ICAgcm9sbWVudVtdCiAgdXN1cm9sICAgIHVzdXJvbFtdCn0KCm1vZGVsIHJvbG1lbnUgewogIGlkciAgIEludAogIGlkbSAgIEludAogIG1lbnUgIG1lbnUgIEByZWxhdGlvbihmaWVsZHM6IFtpZG1dLCByZWZlcmVuY2VzOiBbaWRtXSwgb25EZWxldGU6IE5vQWN0aW9uLCBvblVwZGF0ZTogTm9BY3Rpb24pCiAgcm9sZXMgcm9sZXMgQHJlbGF0aW9uKGZpZWxkczogW2lkcl0sIHJlZmVyZW5jZXM6IFtpZHJdLCBvbkRlbGV0ZTogTm9BY3Rpb24sIG9uVXBkYXRlOiBOb0FjdGlvbikKCiAgQEBpZChbaWRyLCBpZG1dKQp9Cgptb2RlbCB0ZWxlZm9ubyB7CiAgaWR0ZWwgICBJbnQgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIGlkcGUgICAgSW50CiAgbnVtZXJvICBTdHJpbmcgICBAZGIuVmFyQ2hhcigyMCkKICBlc3RhZG8gIEJvb2xlYW4/IEBkZWZhdWx0KHRydWUpCiAgcGVyc29uYSBwZXJzb25hICBAcmVsYXRpb24oZmllbGRzOiBbaWRwZV0sIHJlZmVyZW5jZXM6IFtpZHBlXSwgb25EZWxldGU6IE5vQWN0aW9uLCBvblVwZGF0ZTogTm9BY3Rpb24pCn0KCm1vZGVsIHRlcm1pbmFkbyB7CiAgaWR0ZXIgIEludCAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgbm9tICAgIFN0cmluZz8gIEBkYi5WYXJDaGFyKDIwMCkKICBwdW5pdCAgRmxvYXQ/CiAgaWRtYXIgIEludD8KICBlc3RhZG8gQm9vbGVhbj8gQGRlZmF1bHQodHJ1ZSkKICBtYXJjYSAgbWFyY2E/ICAgQHJlbGF0aW9uKGZpZWxkczogW2lkbWFyXSwgcmVmZXJlbmNlczogW2lkbWFyXSwgb25EZWxldGU6IE5vQWN0aW9uLCBvblVwZGF0ZTogTm9BY3Rpb24pCn0KCm1vZGVsIHVzdWFyaW8gewogIGlkdSAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgc2V4byAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgQGRiLkNoYXIoMSkKICBmb3RvICAgICAgICAgICAgICAgICAgICBCeXRlcz8KICBmZWNuYWMgICAgICAgICAgICAgICAgICBEYXRlVGltZSAgICAgICAgICBAZGIuRGF0ZQogIGlkcGUgICAgICAgICAgICAgICAgICAgIEludAogIGVzdGFkbyAgICAgICAgICAgICAgICAgIEJvb2xlYW4/ICAgICAgICAgIEBkZWZhdWx0KHRydWUpCiAgaWRlbSAgICAgICAgICAgICAgICAgICAgSW50PwogIGJhc2U2NCAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgIEBkYi5WYXJDaGFyCiAgYXJ0ZV9hcnRlX2lkdVRvdXN1YXJpbyAgYXJ0ZVtdICAgICAgICAgICAgQHJlbGF0aW9uKCJhcnRlX2lkdVRvdXN1YXJpbyIpCiAgYXJ0ZV9hcnRlX2lkdWFUb3VzdWFyaW8gYXJ0ZVtdICAgICAgICAgICAgQHJlbGF0aW9uKCJhcnRlX2lkdWFUb3VzdWFyaW8iKQogIGNvdGl6YWNpb24gICAgICAgICAgICAgIGNvdGl6YWNpb25bXQogIGRhdG9zICAgICAgICAgICAgICAgICAgIGRhdG9zW10KICBmYWN0dXJhICAgICAgICAgICAgICAgICBmYWN0dXJhW10KICBvcmRlbnQgICAgICAgICAgICAgICAgICBvcmRlbnRbXQogIHJlZ2lzdHJvbGFib3JhbCAgICAgICAgIHJlZ2lzdHJvbGFib3JhbFtdCiAgZW1wcmVzYSAgICAgICAgICAgICAgICAgZW1wcmVzYT8gICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkZW1dLCByZWZlcmVuY2VzOiBbaWRlbV0sIG9uRGVsZXRlOiBOb0FjdGlvbiwgb25VcGRhdGU6IE5vQWN0aW9uKQogIHBlcnNvbmEgICAgICAgICAgICAgICAgIHBlcnNvbmEgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtpZHBlXSwgcmVmZXJlbmNlczogW2lkcGVdLCBvbkRlbGV0ZTogTm9BY3Rpb24sIG9uVXBkYXRlOiBOb0FjdGlvbikKICB1c3Vyb2wgICAgICAgICAgICAgICAgICB1c3Vyb2xbXQp9Cgptb2RlbCB1c3Vyb2wgewogIGlkciAgICAgSW50CiAgaWR1ICAgICBJbnQKICByb2xlcyAgIHJvbGVzICAgQHJlbGF0aW9uKGZpZWxkczogW2lkcl0sIHJlZmVyZW5jZXM6IFtpZHJdLCBvbkRlbGV0ZTogTm9BY3Rpb24sIG9uVXBkYXRlOiBOb0FjdGlvbikKICB1c3VhcmlvIHVzdWFyaW8gQHJlbGF0aW9uKGZpZWxkczogW2lkdV0sIHJlZmVyZW5jZXM6IFtpZHVdLCBvbkRlbGV0ZTogTm9BY3Rpb24sIG9uVXBkYXRlOiBOb0FjdGlvbikKCiAgQEBpZChbaWRyLCBpZHVdKQp9Cg==",
  "inlineSchemaHash": "028508468af4ed72f12f2e78b1223825addbbd4facb6076a31172a58297f9025",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"arte\":{\"dbName\":null,\"fields\":[{\"name\":\"idar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idot\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fechar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fechaa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idua\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"obs\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"precio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ordent\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ordent\",\"relationName\":\"arteToordent\",\"relationFromFields\":[\"idot\"],\"relationToFields\":[\"idot\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario_arte_iduTousuario\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuario\",\"relationName\":\"arte_iduTousuario\",\"relationFromFields\":[\"idu\"],\"relationToFields\":[\"idu\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario_arte_iduaTousuario\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuario\",\"relationName\":\"arte_iduaTousuario\",\"relationFromFields\":[\"idua\"],\"relationToFields\":[\"idu\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"cliente\":{\"dbName\":null,\"fields\":[{\"name\":\"idcli\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idpe\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"persona\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"persona\",\"relationName\":\"clienteTopersona\",\"relationFromFields\":[\"idpe\"],\"relationToFields\":[\"idpe\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cotizacion\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cotizacion\",\"relationName\":\"clienteTocotizacion\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ordent\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ordent\",\"relationName\":\"clienteToordent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"color\":{\"dbName\":null,\"fields\":[{\"name\":\"idcolor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"punit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idmar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"des\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"marca\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"marca\",\"relationName\":\"colorTomarca\",\"relationFromFields\":[\"idmar\"],\"relationToFields\":[\"idmar\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"configuracionlaboral\":{\"dbName\":null,\"fields\":[{\"name\":\"idconf\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"entrada\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"salida\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"retrasopermitido\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"adicional\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"adicional1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"cotizacion\":{\"dbName\":null,\"fields\":[{\"name\":\"idcot\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idcli\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"precio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descuento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"preciofinal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tiempo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"arte\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"obs\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cliente\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cliente\",\"relationName\":\"clienteTocotizacion\",\"relationFromFields\":[\"idcli\"],\"relationToFields\":[\"idcli\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuario\",\"relationName\":\"cotizacionTousuario\",\"relationFromFields\":[\"idu\"],\"relationToFields\":[\"idu\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"detcot\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"detcot\",\"relationName\":\"cotizacionTodetcot\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ordent\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ordent\",\"relationName\":\"cotizacionToordent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"datos\":{\"dbName\":null,\"fields\":[{\"name\":\"idu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"login\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contrasenia\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuario\",\"relationName\":\"datosTousuario\",\"relationFromFields\":[\"idu\"],\"relationToFields\":[\"idu\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"detcot\":{\"dbName\":null,\"fields\":[{\"name\":\"iddetcot\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idcot\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idpro\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cant\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"punit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stotal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"material\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gr\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tintas\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cotizacion\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cotizacion\",\"relationName\":\"cotizacionTodetcot\",\"relationFromFields\":[\"idcot\"],\"relationToFields\":[\"idcot\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"producto\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"producto\",\"relationName\":\"detcotToproducto\",\"relationFromFields\":[\"idpro\"],\"relationToFields\":[\"idpro\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"detot\":{\"dbName\":null,\"fields\":[{\"name\":\"iddetot\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idot\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idpro\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cant\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"punit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stotal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"material\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gr\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tintas\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ordent\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ordent\",\"relationName\":\"detotToordent\",\"relationFromFields\":[\"idot\"],\"relationToFields\":[\"idot\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"producto\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"producto\",\"relationName\":\"detotToproducto\",\"relationFromFields\":[\"idpro\"],\"relationToFields\":[\"idpro\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"empresa\":{\"dbName\":null,\"fields\":[{\"name\":\"idem\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dir\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"des\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dep\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idpe\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"auto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"base64\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"persona\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"persona\",\"relationName\":\"empresaTopersona\",\"relationFromFields\":[\"idpe\"],\"relationToFields\":[\"idpe\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"leyenda\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"leyenda\",\"relationName\":\"empresaToleyenda\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuario\",\"relationName\":\"empresaTousuario\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"eventos\":{\"dbName\":null,\"fields\":[{\"name\":\"idev\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fechainicio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fechafin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"evento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"adicional\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"adicional1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"factura\":{\"dbName\":null,\"fields\":[{\"name\":\"idfac\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idot\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"monto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"aux\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"aux1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ordent\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ordent\",\"relationName\":\"facturaToordent\",\"relationFromFields\":[\"idot\"],\"relationToFields\":[\"idot\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuario\",\"relationName\":\"facturaTousuario\",\"relationFromFields\":[\"idu\"],\"relationToFields\":[\"idu\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"inventario\":{\"dbName\":null,\"fields\":[{\"name\":\"idin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idprov\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"codigo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"precio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gr\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tam\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"des\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cant\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"proveedor\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"proveedor\",\"relationName\":\"inventarioToproveedor\",\"relationFromFields\":[\"idprov\"],\"relationToFields\":[\"idprov\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"leyenda\":{\"dbName\":null,\"fields\":[{\"name\":\"idle\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"des\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orden\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idem\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"empresa\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"empresa\",\"relationName\":\"empresaToleyenda\",\"relationFromFields\":[\"idem\"],\"relationToFields\":[\"idem\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"marca\":{\"dbName\":null,\"fields\":[{\"name\":\"idmar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"des\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"color\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"color\",\"relationName\":\"colorTomarca\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"producto\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"producto\",\"relationName\":\"marcaToproducto\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"terminado\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"terminado\",\"relationName\":\"marcaToterminado\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"menu\":{\"dbName\":null,\"fields\":[{\"name\":\"idm\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rolmenu\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"rolmenu\",\"relationName\":\"menuTorolmenu\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ordent\":{\"dbName\":null,\"fields\":[{\"name\":\"idot\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idcli\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idcot\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"precio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descuento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"preciofinal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tiempo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"arte\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"obs\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"factura\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"arte1\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"arte\",\"relationName\":\"arteToordent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"detot\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"detot\",\"relationName\":\"detotToordent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"factura1\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"factura\",\"relationName\":\"facturaToordent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cliente\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cliente\",\"relationName\":\"clienteToordent\",\"relationFromFields\":[\"idcli\"],\"relationToFields\":[\"idcli\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cotizacion\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cotizacion\",\"relationName\":\"cotizacionToordent\",\"relationFromFields\":[\"idcot\"],\"relationToFields\":[\"idcot\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuario\",\"relationName\":\"ordentTousuario\",\"relationFromFields\":[\"idu\"],\"relationToFields\":[\"idu\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pago\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pago\",\"relationName\":\"ordentTopago\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"pago\":{\"dbName\":null,\"fields\":[{\"name\":\"idpagp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idot\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"preciof\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pago\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"saldo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"des\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comprobante\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ordent\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ordent\",\"relationName\":\"ordentTopago\",\"relationFromFields\":[\"idot\"],\"relationToFields\":[\"idot\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"persona\":{\"dbName\":null,\"fields\":[{\"name\":\"idpe\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ci\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ap\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"am\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"direccion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"base64\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cliente\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cliente\",\"relationName\":\"clienteTopersona\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"empresa\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"empresa\",\"relationName\":\"empresaTopersona\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"proveedor\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"proveedor\",\"relationName\":\"personaToproveedor\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telefono\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"telefono\",\"relationName\":\"personaTotelefono\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuario\",\"relationName\":\"personaTousuario\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"producto\":{\"dbName\":null,\"fields\":[{\"name\":\"idpro\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tam\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"des\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"preciov\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"precioc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cantidad\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"foto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idmar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"base64\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ranking\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"detcot\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"detcot\",\"relationName\":\"detcotToproducto\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"detot\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"detot\",\"relationName\":\"detotToproducto\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"marca\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"marca\",\"relationName\":\"marcaToproducto\",\"relationFromFields\":[\"idmar\"],\"relationToFields\":[\"idmar\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"proveedor\":{\"dbName\":null,\"fields\":[{\"name\":\"idprov\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dir\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dep\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idpe\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"inventario\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"inventario\",\"relationName\":\"inventarioToproveedor\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"persona\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"persona\",\"relationName\":\"personaToproveedor\",\"relationFromFields\":[\"idpe\"],\"relationToFields\":[\"idpe\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"registrolaboral\":{\"dbName\":null,\"fields\":[{\"name\":\"idre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tiporegistro\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hora\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"adicional\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"adicional2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"atraso\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuario\",\"relationName\":\"registrolaboralTousuario\",\"relationFromFields\":[\"idu\"],\"relationToFields\":[\"idu\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"roles\":{\"dbName\":null,\"fields\":[{\"name\":\"idr\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descrip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jerarquia\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rolmenu\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"rolmenu\",\"relationName\":\"rolesTorolmenu\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usurol\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usurol\",\"relationName\":\"rolesTousurol\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"rolmenu\":{\"dbName\":null,\"fields\":[{\"name\":\"idr\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idm\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"menu\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"menu\",\"relationName\":\"menuTorolmenu\",\"relationFromFields\":[\"idm\"],\"relationToFields\":[\"idm\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roles\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"roles\",\"relationName\":\"rolesTorolmenu\",\"relationFromFields\":[\"idr\"],\"relationToFields\":[\"idr\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"idr\",\"idm\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"telefono\":{\"dbName\":null,\"fields\":[{\"name\":\"idtel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idpe\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numero\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"persona\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"persona\",\"relationName\":\"personaTotelefono\",\"relationFromFields\":[\"idpe\"],\"relationToFields\":[\"idpe\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"terminado\":{\"dbName\":null,\"fields\":[{\"name\":\"idter\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"punit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idmar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"marca\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"marca\",\"relationName\":\"marcaToterminado\",\"relationFromFields\":[\"idmar\"],\"relationToFields\":[\"idmar\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"usuario\":{\"dbName\":null,\"fields\":[{\"name\":\"idu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sexo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"foto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecnac\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idpe\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idem\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"base64\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"arte_arte_iduTousuario\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"arte\",\"relationName\":\"arte_iduTousuario\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"arte_arte_iduaTousuario\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"arte\",\"relationName\":\"arte_iduaTousuario\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cotizacion\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cotizacion\",\"relationName\":\"cotizacionTousuario\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"datos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"datos\",\"relationName\":\"datosTousuario\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"factura\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"factura\",\"relationName\":\"facturaTousuario\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ordent\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ordent\",\"relationName\":\"ordentTousuario\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"registrolaboral\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"registrolaboral\",\"relationName\":\"registrolaboralTousuario\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"empresa\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"empresa\",\"relationName\":\"empresaTousuario\",\"relationFromFields\":[\"idem\"],\"relationToFields\":[\"idem\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"persona\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"persona\",\"relationName\":\"personaTousuario\",\"relationFromFields\":[\"idpe\"],\"relationToFields\":[\"idpe\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usurol\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usurol\",\"relationName\":\"usuarioTousurol\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"usurol\":{\"dbName\":null,\"fields\":[{\"name\":\"idr\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roles\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"roles\",\"relationName\":\"rolesTousurol\",\"relationFromFields\":[\"idr\"],\"relationToFields\":[\"idr\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuario\",\"relationName\":\"usuarioTousurol\",\"relationFromFields\":[\"idu\"],\"relationToFields\":[\"idu\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"idr\",\"idu\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    POSTGRES_PRISMA_URL: typeof globalThis !== 'undefined' && globalThis['POSTGRES_PRISMA_URL'] || typeof process !== 'undefined' && process.env && process.env.POSTGRES_PRISMA_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

