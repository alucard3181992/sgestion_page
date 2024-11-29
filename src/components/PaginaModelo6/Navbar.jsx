// components/Navbar.js
import { Menubar } from "primereact/menubar";

const Navbar = () => {
    const items = [
        { label: 'Home', icon: 'pi pi-fw pi-home' },
        { label: 'Resources', icon: 'pi pi-fw pi-book' },
        { label: 'Services', icon: 'pi pi-fw pi-briefcase' },
        { label: 'Contact', icon: 'pi pi-fw pi-envelope' },
        { label: 'About', icon: 'pi pi-fw pi-info-circle' },
    ];

    return (
        <div>
            <Menubar model={items} />
        </div>
    );
};

export default Navbar;