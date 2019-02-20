import React from 'react';
import { 
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavbarToggler,
    NavItem,
    NavLink } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Naav.css';

class Naav extends React.Component{
    constructor(props){
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };

    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render(){
        return(
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand className="nLink" href="/">Syslog</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nLink" href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nLink" href="#Servicos">Servicos</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nLink" href="#contato">Contato</NavLink>
                            </NavItem>

                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="nLink" href="#Registrar">Registrar-se</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nLink" href="#login">Login</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Naav;
