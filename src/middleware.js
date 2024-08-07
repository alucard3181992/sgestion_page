import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
export async function middleware(request) {
    let jwt = request.cookies.get('acceso')
    let continuar = "no"
    if (request.nextUrl.pathname === "/" || request.nextUrl.pathname.includes("/_next") || request.nextUrl.pathname.includes("/api/") || request.nextUrl.pathname.includes("/icon")) {
    } else {

        if (jwt !== undefined) {
            const { payload } = await jwtVerify(jwt.value, new TextEncoder().encode('secret'))
            payload.roles.map((rol) => {
                rol.menus.map((ee) => {
                    if (ee.url.replace('/Bienvenido', '').replace('.lp', '') === request.nextUrl.pathname) {
                        continuar = "si"
                    }

                })
            }
            )
            if (continuar === "si") {
                return NextResponse.next()
            } else {
                jwt = undefined
                return NextResponse.redirect(new URL("/", request.url))
            }

        } else {
            if ("/Modelo/Modelo" === request.nextUrl.pathname
                || "/Modelo1/Modelo1" === request.nextUrl.pathname
                || "/Modelo2/Modelo2" === request.nextUrl.pathname
                || "/Modelo3/Modelo3" === request.nextUrl.pathname
                || "/Modelo4/Modelo4" === request.nextUrl.pathname
                || "/Modelo5/Modelo5" === request.nextUrl.pathname
                || "/Principal/Principal" === request.nextUrl.pathname
                || "/Usuario/GUsuario" === request.nextUrl.pathname
                || "/Cliente/GCliente" === request.nextUrl.pathname
                || "/Backup/GBackup" === request.nextUrl.pathname
                || "/IngresoSistema/Ingreso" === request.nextUrl.pathname
                //|| "/Votantes/GVotantes" === request.nextUrl.pathname
                || "/Productos/GProductos" === request.nextUrl.pathname) {
                return NextResponse.next()
            } else {
                return NextResponse.redirect(new URL("/", request.url))
            }

        }
    }

}

/* import { NextResponse } from "next/server";
/Votantes/GVotantes
export function middleware() {
    // retrieve the current response
    const res = NextResponse.next()

    // add the CORS headers to the response
    res.headers.append('Access-Control-Allow-Credentials', "true")
    res.headers.append('Access-Control-Allow-Origin', '*') // replace this your actual origin
    res.headers.append('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT')
    res.headers.append(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )

    return res
}

// specify the path regex to apply the middleware to
export const config = {
    matcher: '/api/:path*',
} */
