import React from "react";
import Link from 'next/link';
import { items } from "../PaginasExterior/data";
const Navbar = () => {

    return (<React.Fragment>
        <nav style={{ display: 'flex', background: "white", alignItems: 'center', justifyContent: 'space-between', padding: '10px' }}>
            <div>
                {/* Logo */}
                <img src="tu-logo.png" alt="Logo" style={{ maxWidth: '100px' }} />
            </div>
            <div style={{ display: 'flex' }}>
                {/* Menús horizontales */}
                {items.map((menuItem, index) => (
                    <Link
                        key={index}
                        href={menuItem.href}
                        role="menuitem"
                        aria-haspopup="false"
                        className="p-menuitem-link"
                        style={{ margin: '0 10px', textDecoration: 'none', color: 'black' }}
                    >
                        <span className={"p-menuitem-icon " + menuItem.icon}></span>
                        <span className="p-menuitem-text">{menuItem.label}</span>
                    </Link>
                ))}
            </div>
        </nav>
    </React.Fragment>)
}
export default Navbar