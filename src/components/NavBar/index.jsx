import React from 'react';

// Image
import logo from '../../assets/img/logo.png';

// Bootstrap
import Navbar from 'react-bootstrap/Navbar';

// CSS
import './styles.css';

const NavBar = () => {
    return (
        <Navbar className="top-navbar" expand="lg">
            <Navbar.Brand href="/">
                <img src={logo} className="d-inline-block align-top" alt="UFSC" />
            </Navbar.Brand>
            <h1>Comitê de Enfrentamento e Combate a Epidemia do COVID-19</h1>
        </Navbar>
    )
}

export default NavBar;