//carpeta services pages
import VistaCliente from "@/components/Cliente/ClienteDatos";
import ClienteContextProvider from "@/context/ClienteContext";
const Cliente = () => {
    return (
        <ClienteContextProvider>
            <VistaCliente />
        </ClienteContextProvider>
    )
}
export default Cliente;
