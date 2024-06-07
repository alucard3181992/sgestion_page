import React, { useState } from "react";

const AuthWrapper = ({ children, correctPassword }) => {
    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handlePasswordSubmit = () => {
        if (password === correctPassword) {
            setIsAuthenticated(true);
            setErrorMessage("");
        } else {
            setErrorMessage("No tiene los permisos suficientes para acceder a la página. Por favor, introduzca la contraseña correcta.");
        }
    };

    if (!isAuthenticated) {
        return (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
                <h2>Acceso Restringido</h2>
                <p>Ingrese la contraseña para acceder a esta página:</p>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ padding: "10px", fontSize: "16px", marginBottom: "10px" }}
                />
                <button onClick={handlePasswordSubmit} style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>Enviar</button>
                {errorMessage && <p style={{ color: "red", marginTop: "10px" }}>{errorMessage}</p>}
            </div>
        );
    }

    return <>{children}</>;
};

export default AuthWrapper;
