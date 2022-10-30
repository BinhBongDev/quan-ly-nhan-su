import React, { useState } from 'react';
import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand
} from 'reactstrap';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
        <Navbar color="primary" light expand="md" >
            <NavbarBrand href="/">Home</NavbarBrand>
            <NavbarToggler onClick={() => toggle() } />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="#">
                            <span className="fa fa-users fa-lg"></span>{' '}
                            Staff
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">
                            <span className="fa fa-address-card fa-lg"></span>{' '}
                            Department
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">
                            <span className="fa fa-money fa-lg"></span>{' '}
                            Salary
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
   
  );
}

export default Header;